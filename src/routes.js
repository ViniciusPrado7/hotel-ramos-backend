const express = require('express');
const QuartosController = require('./controllers/QuartosController');
const UsersController = require('./controllers/UsersController');
const router = express.Router();

router.get('/quartos', QuartosController.getTodosQuartos);
router.get('/quartos/:id_quarto' , QuartosController.getQuartoPorID);

router.post('/user', UsersController.cadastrarUsers);
router.post('/login', UsersController.loginUser);
router.get('/users/:email_user', UsersController.getUserPorEmail);

module.exports = router;