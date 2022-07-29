const { Router } = require('express');
const { usuarioListar, usuarioPorId, usuarioCrear, usuarioEditar, usuarioEliminar } = require('../controllers/user');

const router = Router();

router.get('/', usuarioListar);

router.get('/:id', usuarioPorId);

router.post('/', usuarioCrear);

router.put('/:id', usuarioEditar);

router.delete('/:id', usuarioEliminar);

module.exports = router;