const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const config = require('./config.json');
const app = express();

app.use(morgan(':remote-addr - :method :url :status :response-time ms'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('requestCode');
});

function findRoute(routePath) {
    return config.routes.find(route => route.path === routePath);
}

app.get('/:route', (req, res) => {
    const route = findRoute(req.params.route);

    if (route) {
        const filePath = path.join(__dirname, 'files', route.file);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(404).send('The file no longer exists, it has probably been deleted.');
            }
            res.render('display', {
                code: data,
                filename: route.file,
                description: route.description
            });
        });
    } else {
        res.status(404).send('This file code does not exist.');
    }
});

app.listen(3030, () => {
    console.log('Serveur démarré sur le port 3030 !\nPour arrêter le serveur, utilisez Ctrl+C.');
});
