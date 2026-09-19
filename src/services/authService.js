import { supabase } from "../lib/supabase.js";

/**
 * Production domain fallback for CodeMedic Vercel deployment.
 */
export const PRODUCTION_ORIGIN = "https://code-medic-xi.vercel.app";

/**
 * Local development fallback.
 */
export const LOCAL_DEV_ORIGIN = "http://localhost:5174";

/**
 * Computes an environment-aware authentication redirect URL.
 * 
 * Rules:
 * 1. In browser runtime: uses window.location.origin (e.g. http://localhost:5174, http://localhost:5173, or https://code-medic-xi.vercel.app).
 * 2. If VITE_SITE_URL environment variable is provided, honors that.
 * 3. Fallback for SSR / non-browser: PRODUCTION_ORIGIN.
 * 
 * @param {string} [path=""] Optional path or route to append
 * @returns {string} Fully qualified absolute redirect URL
 */
export function getAuthRedirectUrl(path = "") {
    let origin = "";

    if (typeof import.meta !== "undefined" && import.meta?.env?.VITE_SITE_URL) {
        origin = import.meta.env.VITE_SITE_URL;
    } else if (typeof window !== "undefined" && window.location?.origin) {
        origin = window.location.origin;
    } else {
        origin = PRODUCTION_ORIGIN;
    }

    // Ensure no trailing slash on origin
    origin = origin.replace(/\/+$/, "");

    if (!path) return origin;

    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${origin}${normalizedPath}`;
}

/**
 * Registers a new user with Supabase Auth using environment-aware email verification redirect.
 */
export async function signUpUser({ email, password, name }) {
    const redirectUrl = getAuthRedirectUrl();

    return await supabase.auth.signUp({
        email: email.trim(),
        password: password,
        options: {
            data: {
                name: name ? name.trim() : "",
            },
            emailRedirectTo: redirectUrl,
        },
    });
}

/**
 * Resends the account verification email to the user with environment-aware redirect.
 */
export async function resendVerificationEmail(email) {
    if (!email || !email.trim()) {
        throw new Error("Please enter your email address to resend verification.");
    }

    const redirectUrl = getAuthRedirectUrl();

    const { data, error } = await supabase.auth.resend({
        type: "signup",
        email: email.trim(),
        options: {
            emailRedirectTo: redirectUrl,
        },
    });

    if (error) {
        throw error;
    }

    return data;
}

/**
 * Sends a password reset email using environment-aware redirect.
 */
export async function sendPasswordResetEmail(email) {
    if (!email || !email.trim()) {
        throw new Error("Please enter your email address to reset your password.");
    }

    const redirectUrl = getAuthRedirectUrl();

    const { data, error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: redirectUrl,
    });

    if (error) {
        throw error;
    }

    return data;
}

/**
 * Parses authentication callback errors or status from window.location hash and search parameters.
 * Handles cases like:
 * - #error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired
 * - ?error=...
 */
export function parseAuthUrlParams() {
    if (typeof window === "undefined") {
        return {
            hasError: false,
            error: null,
            errorCode: null,
            errorDescription: null,
            isOtpExpired: false,
            userFriendlyMessage: null,
        };
    }

    const searchParams = new URLSearchParams(window.location.search);
    const hashContent = window.location.hash.startsWith("#")
        ? window.location.hash.substring(1)
        : window.location.hash;
    const hashParams = new URLSearchParams(hashContent);

    const error = searchParams.get("error") || hashParams.get("error");
    const errorCode = searchParams.get("error_code") || hashParams.get("error_code");
    const rawDescription = searchParams.get("error_description") || hashParams.get("error_description");
    const accessToken = searchParams.get("access_token") || hashParams.get("access_token");
    const type = searchParams.get("type") || hashParams.get("type");

    let errorDescription = rawDescription ? decodeURIComponent(rawDescription.replace(/\+/g, " ")) : null;
    const isOtpExpired = errorCode === "otp_expired" || (errorDescription && errorDescription.toLowerCase().includes("expired"));

    let userFriendlyMessage = null;
    if (error || errorCode) {
        if (isOtpExpired) {
            userFriendlyMessage = "Your email verification link has expired or has already been used. Please request a new verification email below.";
        } else if (errorDescription) {
            userFriendlyMessage = errorDescription;
        } else {
            userFriendlyMessage = "Authentication error: " + (error || "Unknown error occurred.");
        }
    }

    return {
        hasError: Boolean(error || errorCode),
        error,
        errorCode,
        errorDescription,
        isOtpExpired,
        userFriendlyMessage,
        accessToken,
        type,
    };
}

/**
 * Removes auth hash / query error fragments from the browser URL without triggering a page reload.
 */
export function clearAuthUrlParams() {
    if (typeof window === "undefined" || !window.history?.replaceState) return;

    // Check if there are hash or query auth params to clean
    const hasHash = window.location.hash && (
        window.location.hash.includes("access_token") ||
        window.location.hash.includes("error") ||
        window.location.hash.includes("refresh_token")
    );

    const searchParams = new URLSearchParams(window.location.search);
    const hasSearchAuth = searchParams.has("error") || searchParams.has("error_code") || searchParams.has("code");

    if (hasHash || hasSearchAuth) {
        searchParams.delete("error");
        searchParams.delete("error_code");
        searchParams.delete("error_description");
        searchParams.delete("code");

        const newSearch = searchParams.toString() ? `?${searchParams.toString()}` : "";
        const cleanUrl = `${window.location.origin}${window.location.pathname}${newSearch}`;
        window.history.replaceState(null, "", cleanUrl);
    }
}
