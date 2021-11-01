const { Router } = require('express');

const passport = require("passport");
const UserController = require('../controllers/UserController');
const EventoController = require('../controllers/EventoController');
const ComentarioController = require('../controllers/ComentarioController');
const CargoController = require('../controllers/CargoController');


const AuthController = require("../controllers/AuthController");



const mesmoUserMiddleware = require("../middlewares/mesmoUser");

const router = Router();

const path = require('path');


router.use("/private", passport.authenticate('jwt', {session: false}));
router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);


router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.delete('/users/:id', UserController.destroy);
router.post('/users', UserController.create);
router.put('/users/:id',UserController.update);

router.get('/evento', EventoController.index);
router.get('/evento/:id', EventoController.show);
router.delete('/evento/:id', mesmoUserMiddleware, EventoController.destroy);
router.post('/evento', EventoController.create);
router.put('/evento/:id',mesmoUserMiddleware, EventoController.update);

router.get('/comentario', ComentarioController.index);
router.get('/comentario/:id', ComentarioController.show);
router.delete('/comentario/:id', ComentarioController.destroy);
router.post('/comentario', ComentarioController.create);
router.put('/comentario/:id',ComentarioController.update);

router.get('/cargo', CargoController.index);
router.get('/cargo/:id', CargoController.show);
router.delete('/cargo/:id',mesmoUserMiddleware, CargoController.destroy);
router.post('/cargo', CargoController.create);
router.put('/cargo/:id',mesmoUserMiddleware, CargoController.update);

module.exports = router;