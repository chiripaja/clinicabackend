const express = require('express');

const { getAllStock, getStockById,
    createStock,
    updateStock,
    deleteStock,} = require('../controller/stockController');

const router = express.Router();

// Rutas para stock
router.get('/', getAllStock);
router.get('/:id', getStockById);
router.post('/', createStock);
router.put('/:id', updateStock);
router.delete('/:id', deleteStock);

module.exports = router;
