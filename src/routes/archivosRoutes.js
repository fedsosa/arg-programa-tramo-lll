const archivoRouter = require('express').Router();
const {
    subirArchivo,
} = require('./../controllers/ArchivosControllers.js');

archivoRouter.post('/subirArchivo', subirArchivo);

module.exports = archivoRouter;