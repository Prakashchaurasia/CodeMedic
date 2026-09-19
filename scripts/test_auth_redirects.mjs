import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const authServicePath = path.join(ROOT_DIR, 'src', 'services', 'authService.js');

// Mock window for Node testing
globalThis.window = {
    location: {
        origin: 'http://localhost:5174',
        pathname: '/',
        search: '',
        hash: ''
    },
    history: {
        replaceState: () => {}
    }
};

const {
    getAuthRedirectUrl,
    parseAuthUrlParams,
    clearAuthUrlParams,
    signUpUser,
    resendVerificationEmail,
    sendPasswordResetEmail,
    PRODUCTION_ORIGIN,
    LOCAL_DEV_ORIGIN
} = await import(pathToFileURL(authServicePath).href);

console.log("================ Testing Auth Redirect Logic ================");

// Test 1: Local development origin
globalThis.window.location.origin = 'http://localhost:5174';
const localRedirect = getAuthRedirectUrl();
console.log(`Local redirect URL: ${localRedirect}`);
if (localRedirect !== 'http://localhost:5174') {
    throw new Error(`Expected http://localhost:5174, got ${localRedirect}`);
}

// Test 2: Production Vercel origin
globalThis.window.location.origin = 'https://code-medic-xi.vercel.app';
const prodRedirect = getAuthRedirectUrl();
console.log(`Production redirect URL: ${prodRedirect}`);
if (prodRedirect !== 'https://code-medic-xi.vercel.app') {
    throw new Error(`Expected https://code-medic-xi.vercel.app, got ${prodRedirect}`);
}

// Test 3: Path appending
const pathRedirect = getAuthRedirectUrl('/auth/callback');
console.log(`With path redirect URL: ${pathRedirect}`);
if (pathRedirect !== 'https://code-medic-xi.vercel.app/auth/callback') {
    throw new Error(`Expected https://code-medic-xi.vercel.app/auth/callback, got ${pathRedirect}`);
}

// Test 4: Parse expired OTP error in URL hash
globalThis.window.location.hash = '#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired';
globalThis.window.location.search = '';
const parsedError = parseAuthUrlParams();
console.log("Parsed expired OTP callback:", parsedError);
if (!parsedError.hasError || !parsedError.isOtpExpired || parsedError.errorCode !== 'otp_expired') {
    throw new Error("Failed to correctly parse expired OTP error hash");
}

// Test 5: Parse valid access_token in URL hash
globalThis.window.location.hash = '#access_token=test_token&refresh_token=refresh_test&type=signup';
const parsedSuccess = parseAuthUrlParams();
console.log("Parsed successful signup callback:", parsedSuccess);
if (parsedSuccess.hasError || parsedSuccess.accessToken !== 'test_token' || parsedSuccess.type !== 'signup') {
    throw new Error("Failed to correctly parse valid access token hash");
}

// Test 6: Verify exported functions
if (typeof signUpUser !== 'function' || typeof resendVerificationEmail !== 'function' || typeof sendPasswordResetEmail !== 'function') {
    throw new Error("Missing exported auth functions");
}

console.log("\n✓ ALL AUTH REDIRECT & CALLBACK TESTS PASSED!");
