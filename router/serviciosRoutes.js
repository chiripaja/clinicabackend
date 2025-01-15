const express = require('express');
const router = express.Router();

const { getAllServicios,
    getServicioById,
    createServicio,
    updateServicio,
    deleteServicio,
 } = require('../controller/servicioController');

// Ruta para obtener todos los servicios
router.get('/', getAllServicios);

// Ruta para obtener un servicio por ID
router.get('/:id', getServicioById);

// Ruta para crear un nuevo servicio
router.post('/', createServicio);

// Ruta para actualizar un servicio
router.put('/:id', updateServicio);

// Ruta para eliminar un servicio
router.delete('/:id', deleteServicio);

module.exports = router;
