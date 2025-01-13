// host + /api/movimientos
const express = require('express');

const { getAllMovimientos,getMovimientoById,
    createMovimiento,
    updateMovimiento,
    deleteMovimiento, } = require('../controller/movimientoController');

const router = express.Router();

// Rutas para movimientos
router.get('/', getAllMovimientos);
router.get('/:id', getMovimientoById);
router.post('/', createMovimiento);
router.put('/:id', updateMovimiento);
router.delete('/:id', deleteMovimiento);

module.exports = router;
