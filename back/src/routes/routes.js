const { Router } = require('express');

const passport = require("passport");
const UserController = require('../controllers/UserController');
const EventoController = require('../controllers/EventoController');
const ComentarioController = require('../controllers/ComentarioController');
const CargoController = require('../controllers/CargoController');

const router = Router();

const path = require('path');

router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.destroy);
router.post('/users', UserController.create);
router.put('/users/:id',UserController.update);

router.get('/evento', EventoController.index);
router.get('/evento/:id', EventoController.show);
router.delete('/evento/:id', EventoController.destroy);
router.post('/evento', EventoController.create);
router.put('/evento/:id',EventoController.update);

router.get('/comentario', ComentarioController.index);
router.get('/comentario/:id', ComentarioController.show);
router.delete('/comentario/:id', ComentarioController.destroy);
router.post('/comentario', ComentarioController.create);
router.put('/comentario/:id',ComentarioController.update);

router.get('/cargo', CargoController.index);
router.get('/cargo/:id', CargoController.show);
router.delete('/cargo/:id', CargoController.destroy);
router.post('/cargo', CargoController.create);
router.put('/cargo/:id',CargoController.update);

module.exports = router;