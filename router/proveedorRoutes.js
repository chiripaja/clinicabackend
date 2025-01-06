// host + /api/proveedor
const { Router } = require('express');

const {
    findAllProveedores,
    findProveedorById,
    createProveedor,
    updateProveedor,
    deleteProveedorLogic,
    restoreProveedor
} = require('../controller/proveedorController');

const router = Router();

// Rutas para CRUD de proveedores
router.get('/', findAllProveedores);
router.get('/:id', findProveedorById);
router.post('/', createProveedor);
router.put('/:id', updateProveedor);
router.delete('/:id', deleteProveedorLogic);
router.patch('/restore/:id', restoreProveedor);

module.exports = router;
