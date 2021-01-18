const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();

app.use(bodyParser.json());
app.use(cors());

let port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/dist/portafolio'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/portafolio/index.html'));
});

app.post('/contact', function(req, res) {
    configMensaje(req.body);
    res.status(200).send();
});
app.listen(8080, () => {
    console.log(`Servidor corriendo ${port}`);
});