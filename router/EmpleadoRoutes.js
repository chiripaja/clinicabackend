// host + /api/empleado
const { Router } = require('express');

const {
    findAllEmpleados,
    findEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleadoLogic,
    restoreEmpleado
} = require('../controller/empleadoController');

const router = Router();

// Rutas para CRUD de empleados
router.get('/', findAllEmpleados);
router.get('/:id', findEmpleadoById);
router.post('/', createEmpleado);
router.put('/:id', updateEmpleado);
router.delete('/:id', deleteEmpleadoLogic);
router.patch('/restore/:id', restoreEmpleado);

module.exports = router;
