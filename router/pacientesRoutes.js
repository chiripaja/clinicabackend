const express = require('express');
const { getAllPacientes, getPacienteById, createPaciente, updatePaciente, deletePaciente, buscarnrodoc } = require('../controller/pacientesController');

const router = express.Router();

// Rutas de pacientes
router.get('/', getAllPacientes); // Obtener todos los pacientes
router.get('/buscarnrodoc/:nroDocumento',buscarnrodoc)
router.get('/:id', getPacienteById); // Obtener paciente por ID
router.post('', createPaciente); // Crear un nuevo paciente
router.put('/:id', updatePaciente); // Actualizar un paciente
router.delete('/:id',deletePaciente); // Borrado lógico de un paciente

module.exports = router;
