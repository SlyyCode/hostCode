const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Charger la configuration des routes à partir du fichier config.json
const config = require('./config.json');

const app = express();

// Servir des fichiers statiques pour CSS et JS
app.use(express.static('public'));

// Utiliser EJS comme moteur de templates
app.set('view engine', 'ejs');

// Fonction utilitaire pour trouver une route dans le fichier config.json
function findRoute(routePath) {
    return config.routes.find(route => route.path === routePath);
}

// Route principale pour afficher le contenu du fichier associé à l'URL
app.get('/:route', (req, res) => {
    const route = findRoute(req.params.route);

    if (route) {
        const filePath = path.join(__dirname, 'files', route.file);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(404).send('Fichier non trouvé');
            }
            res.render('display', {
                code: data,
                filename: route.file,
                description: route.description
            });
        });
    } else {
        res.status(404).send('Route non trouvée');
    }
});

// Charger les certificats SSL
const sslOptions = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
};

// Démarrer le serveur HTTPS
https.createServer(sslOptions, app).listen(3000, () => {
    console.log('Serveur HTTPS démarré sur https://127.0.0.1:3000');
});
