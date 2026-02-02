import { Client } from 'node-appwrite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async ({ req, res, log, error }) => {
    const staticFolder = path.join(__dirname, '../static');

    // Default to index.html
    let requestPath = req.path === '/' ? '/index.html' : req.path;

    // Prevent directory traversal
    const safePath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(staticFolder, safePath);

    // If file doesn't exist, try serving index.html (SPA fallback)
    if (!fs.existsSync(filePath)) {
        filePath = path.join(staticFolder, 'index.html');
    }

    try {
        const content = fs.readFileSync(filePath);

        // Determine content type
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';

        return res.send(content, 200, {
            'Content-Type': contentType,
        });
    } catch (err) {
        error(err.toString());
        return res.send('Internal Server Error', 500);
    }
};
