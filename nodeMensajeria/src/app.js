const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.post('/contact', function(req, res) {
    configMensaje(req.body);
    res.status(200).send();
});
app.listen(3000, () => {
    console.log(`Servidor corriendo ${port}`);
});