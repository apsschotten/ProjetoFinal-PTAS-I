const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});