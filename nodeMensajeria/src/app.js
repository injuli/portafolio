const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Serve only the static files form the dist directory
app.use(express.static(_dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(_dirname + '/dist/index.html'));

});

app.post('/contact', function(req, res) {
    configMensaje(req.body);
    res.status(200).send();
});
app.listen(port, () => {
    console.log(`Servidor corriendo ${port}`);
});