const autenticacionRouter = require('express').Router();
const {
    autenticar,
    registrar,
    verificarToken,
} = require('./../controllers/AutenticacionControllers.js');

autenticacionRouter.post('/autenticar', autenticar);

autenticacionRouter.post('/verificarToken', verificarToken);

module.exports = autenticacionRouter;