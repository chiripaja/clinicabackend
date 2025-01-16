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
  const {IdDocIdentidad,
    ApellidoPaterno,
    ApellidoMaterno,
    PrimerNombre,
    SegundoNombre,
    FechaNacimiento,
    NroDocumento,
    Telefono,
    DireccionDomicilio,
    IdTipoSexo,
    IdEstadoCivil} = req.body;

  try {
    // Validar que el NroDocumento sea único
    const existePaciente = await Pacientes.findOne({ where: { NroDocumento } });

    if (existePaciente) {
      return res.status(400).json({ error: 'El número de documento ya está registrado' });
    }

    const nuevoPaciente = await Pacientes.create({ IdDocIdentidad,
      ApellidoPaterno,
      ApellidoMaterno,
      PrimerNombre,
      SegundoNombre,
      FechaNacimiento,
      NroDocumento,
      Telefono,
      DireccionDomicilio,
      IdTipoSexo,
      IdEstadoCivil });
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el paciente' });
  }/**/
};

// Actualizar un paciente
const updatePaciente = async (req, res) => {
  const { id } = req.params;
  const {IdDocIdentidad,
    ApellidoPaterno,
    ApellidoMaterno,
    PrimerNombre,
    SegundoNombre,
    FechaNacimiento,
    NroDocumento,
    Telefono,
    DireccionDomicilio,
    IdTipoSexo,
    IdEstadoCivil} = req.body;

  try {
    const paciente = await Pacientes.findByPk(id);

    if (!paciente || paciente.idestadopaciente === 0) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    await paciente.update({
      IdDocIdentidad,
    ApellidoPaterno,
    ApellidoMaterno,
    PrimerNombre,
    SegundoNombre,
    FechaNacimiento,
    NroDocumento,
    Telefono,
    DireccionDomicilio,
    IdTipoSexo,
    IdEstadoCivil
  });

 
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

const buscarnrodoc = async (req, res) => {
  const { nroDocumento } = req.params; // Extraer el parámetro nroDocumento de la URL

  if (!nroDocumento) {
    return res.status(400).json({ message: 'Número de documento es requerido' });
  }

  try {
    const paciente = await Pacientes.findOne({
      where: { NroDocumento: nroDocumento }, // Buscar por el campo NroDocumento
    });

    if (paciente) {
      res.json(paciente); // Enviar los datos del paciente si se encuentra
    } else {
      res.status(404).json({ message: 'Paciente no encontrado' });
    }
  } catch (error) {
    console.error('Error al buscar paciente:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

module.exports = {
  getAllPacientes,
  getPacienteById,
  createPaciente,
  updatePaciente,
  deletePaciente,
  buscarnrodoc
};
