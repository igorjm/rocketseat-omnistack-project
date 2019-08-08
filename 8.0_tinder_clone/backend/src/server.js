const express = require('express');
const mongoose = require('mongoose');
// permite a aplicacao ser acessada de qualquer endereço
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-2qskh.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);