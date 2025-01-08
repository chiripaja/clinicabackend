const express = require('express');
const { getBienesInsumos, getBienInsumoById, createBienInsumo, updateBienInsumo, deleteBienInsumo } = require('../controller/FactCatalogoBienesInsumosController');
const router = express.Router();


// Rutas CRUD
router.get('/', getBienesInsumos);
router.get('/:id', getBienInsumoById);
router.post('/', createBienInsumo);
router.put('/:id', updateBienInsumo);
router.delete('/:id', deleteBienInsumo);

module.exports = router;
