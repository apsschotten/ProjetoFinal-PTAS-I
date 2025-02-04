const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');

router.get('/', controller.fstPage);
router.get('/Produtos', controller.fstPage);
router.get('/Produtos/:id', controller.prodPage);
router.post('/Produtos/Cadastrar', controller.registerPage);
router.put('/Produtos/Alterar/:id', controller.alterPage);
router.delete('/Produtos/Remover/:id', controller.removePage);

module.exports = router;