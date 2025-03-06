import path from 'path';
import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import { resolve } from 'node:path'

export default defineConfig(({ mode }) => ({
    plugins: [
        liveReload([
            path.resolve(__dirname, 'public/**/*.php'), // Corrected path
        ]),
    ],
    server:{
        origin: 'http://dev.local:5173', // Ajoute le protocole
        host: '0.0.0.0', // Permet d'accepter les connexions externes
        port: 5173,
        strictPort: true,
        cors: true,
        open: false,
    },
    base: '/assets/',
    css: {
        devSourcemap: mode === 'development', // Enable CSS/SCSS source maps only in dev
    },
    build: {
        copyPublicDir: false,
        manifest: true,
        sourcemap: mode === 'development',
        rollupOptions: {
            input: {
                index: "src/js/index.js",
                styles: "src/scss/application.scss",
                panel: "src/scss/panel/panel.scss"
            },
            output:{
                entryFileNames: '[name]-[hash].js',
                chunkFileNames: '[name]-[hash].js',
                assetFileNames: ({ name }) => {
                    if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
                        return 'fonts/[name][extname]';
                    }
                    if (/\.(png|jpe?g|gif|svg|webp)$/.test(name ?? '')) {
                        return 'images/[name][extname]';
                    }
                    if (/\.css$/.test(name ?? '')) {
                        return '[name]-[hash][extname]';
                    }
                    return '[name]-[hash][extname]';
                }
            }
        },
        outDir: 'public/assets', // Le dossier de sortie racine
        assetsDir: '', // Indique que les polices doivent aller dans 'assets/fonts'
        emptyOutDir: true,
    },
}));