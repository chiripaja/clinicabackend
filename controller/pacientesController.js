const Pacientes = require("../model/Paciente");

// Obtener todos los pacientes
const getAllPacientes = async (req, res) => {
  try {
    const pacientes = await Pacientes.findAll({
      where: { idestadopaciente: 1 }, // Solo pacientes activos
    });
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los pacientes' });
  }
};

// Obtener un paciente por ID
const getPacienteById = async (req, res) => {
  const { id } = req.params;

  try {
    const paciente = await Pacientes.findByPk(id);

    if (!paciente || paciente.idestadopaciente === 0) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    res.status(200).json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el paciente' });
  }
};

// Crear un nuevo paciente
const createPaciente = async (req, res) => {
  const { NroDocumento, ...restoDatos } = req.body;

  try {
    // Validar que el NroDocumento sea único
    const existePaciente = await Pacientes.findOne({ where: { NroDocumento } });

    if (existePaciente) {
      return res.status(400).json({ error: 'El número de documento ya está registrado' });
    }

    const nuevoPaciente = await Pacientes.create({ NroDocumento, ...restoDatos });
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paciente' });
  }
};

// Actualizar un paciente
const updatePaciente = async (req, res) => {
  const { id } = req.params;
  const { NroDocumento, ...restoDatos } = req.body;

  try {
    const paciente = await Pacientes.findByPk(id);

    if (!paciente || paciente.idestadopaciente === 0) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    // Validar si el NroDocumento ya existe (excepto el actual)
    if (NroDocumento && NroDocumento !== paciente.NroDocumento) {
      const existeOtro = await Pacientes.findOne({ where: { NroDocumento } });

      if (existeOtro) {
        return res.status(400).json({ error: 'El número de documento ya está registrado' });
      }
    }

    await paciente.update({ NroDocumento, ...restoDatos });
    res.status(200).json(paciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el paciente' });
  }
};

// Borrado lógico de un paciente
const deletePaciente = async (req, res) => {
  const { id } = req.params;

  try {
    const paciente = await Pacientes.findByPk(id);

    if (!paciente || paciente.idestadopaciente === 0) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    await paciente.update({ idestadopaciente: 0 });
    res.status(200).json({ message: 'Paciente eliminado lógicamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el paciente' });
  }
};

module.exports = {
  getAllPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
