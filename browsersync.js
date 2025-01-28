import browserSync from 'browser-sync';
import path from "path";

process.env.APP_ENV = 'dev';

const rootDir = path.basename(process.cwd());

browserSync.init({
    proxy: rootDir+'.test', // Target site to proxy
    host: 'dev.local',
    open: 'external',
    port: 3000, // BrowserSync runs on this port
    watch: false,
    middleware: [
        function (req, res, next) {
            // Set a custom header for the server
            res.setHeader('X-App-Mode', 'dev'); // Pass the APP_MODE value as a custom header
            next();
        }
    ],
});