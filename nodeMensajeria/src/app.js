const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Install express server

// Serve only the static files form the dist directory
app.use(express.static('./dist/portafolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/portafolio/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);



app.post('/contact', function(req, res) {
    configMensaje(req.body);
    res.status(200).send();
});


/*
app.listen(8080, () => {
    console.log(`Servidor corriendo ${port}`);
});*/