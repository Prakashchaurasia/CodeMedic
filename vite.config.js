import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

function cdnBrotliPlugin() {
    return {
        name: "cdn-brotli-plugin",
        configureServer(server) {
            server.middlewares.use("/cdn", (req, res, next) => {
                if (!req.url?.endsWith(".tar.br")) {
                    next();
                    return;
                }

                const relativePath = decodeURIComponent(req.url);
                const filePath = path.join(
                    process.cwd(),
                    "public",
                    "cdn",
                    relativePath
                );

                if (!fs.existsSync(filePath)) {
                    next();
                    return;
                }

                const file = fs.readFileSync(filePath);
                res.statusCode = 200;
                res.removeHeader("Content-Encoding");
                res.setHeader("Content-Type", "application/octet-stream");
                res.setHeader("Content-Length", file.length);
                res.end(file);
            });
        }
    };
}

export default defineConfig({
    plugins: [
        react(),
        cdnBrotliPlugin()
    ],

    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        }
    },

    optimizeDeps: {
        exclude: ["@gameguild/emception-browser"],
    },
});