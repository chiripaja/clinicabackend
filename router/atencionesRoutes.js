// host + /api/atenciones
const express = require('express');
const router = express.Router();

const { getAllAtenciones, getAtencionById,
    createAtencion,
    updateAtencion,
    deleteAtencion,
    getAtencionsByFechasAndIdservicio, } = require('../controller/atencionController');

// Obtener todas las atenciones activas
router.get('/', getAllAtenciones);

// Obtener una atención específica por ID
router.get('/:id', getAtencionById);

// Crear una nueva atención
router.post('/', createAtencion);

// Actualizar una atención existente
router.put('/:id', updateAtencion);

// Borrar lógicamente una atención
router.delete('/:id', deleteAtencion);
router.post('/buscar', getAtencionsByFechasAndIdservicio);
module.exports = router;
