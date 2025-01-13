const express = require('express');
const {
    getAllMedicamentos,
    getMedicamentoById,
    createMedicamento,
    updateMedicamento,
    deleteMedicamento,
} = require('../controller/MedicamentesController');


const router = express.Router();

// Ruta para obtener todos los medicamentos
router.get('/', getAllMedicamentos);

// Ruta para obtener un medicamento por ID
router.get('/:id', getMedicamentoById);

// Ruta para crear un nuevo medicamento
router.post('/', createMedicamento);

// Ruta para actualizar un medicamento existente
router.put('/:id', updateMedicamento);

// Ruta para eliminar un medicamento
router.delete('/:id', deleteMedicamento);

module.exports = router;
