const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

// LOGIN
routes.post('/session', SessionController.create);

// LISTAGEM DE ONGs
routes.get('/ongs', OngController.index);

// CADASTRO DE ONG
routes.post('/ongs', OngController.create);

// LISTAGEM DE CASOS POR ONG
routes.get('/profile', ProfileController.index);

// CADASTRO DE CASOS
routes.post('/incidents', IncidentController.create);

// LISTAGEM DE CASOS
routes.get('/incidents', IncidentController.index);

// REMOÇÃO DE CASOS
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
