const express = require('express');
const curriculoController = require('./controllers/curriculoController');

const router = express.Router();

router.get('/curriculo', curriculoController.getAll);

module.exports = router;
