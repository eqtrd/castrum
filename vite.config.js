import path from 'path';
import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload'
import { resolve } from 'node:path'

export default defineConfig({
    plugins: [
        liveReload([
            path.resolve(__dirname, 'public/**/*.php'), // Corrected path
        ]),
    ],
    server:{
        origin: 'http://localhost:5173',
        cors: true,
        open: false,
    },
    base: '/assets/',
    build: {
        lib: {
            entry: 'src/js/index.js',
            formats: ['es'],
        },
        copyPublicDir: false,
        manifest: true,
        rollupOptions: {
            input: {
                index: "src/js/index.js",
                styles: "src/scss/application.scss",
            },
        },
        outDir: 'public/assets', // Le dossier de sortie racine
        assetsDir: '', // Indique que les polices doivent aller dans 'assets/fonts'
        emptyOutDir: true,
    },
});