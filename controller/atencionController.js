const { Op } = require("sequelize");
const Atenciones = require("../model/Atencion");
const Pacientes = require("../model/Paciente");
const Servicios = require("../model/Servicios");

// Obtener todas las atenciones activas (idEstadoAtencion = 1)
const getAllAtenciones = async (req, res) => {
  try {
    const atenciones = await Atenciones.findAll({
      where: { idEstadoAtencion: 1 },
      include: [
        {
            model: Servicios, // Modelo relacionado con Atenciones
        },
        {
            model: Pacientes, // Modelo relacionado con Atenciones
        },
    ],
    });
    res.status(200).json(atenciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las atenciones' });
  }
};

// Obtener una atención específica por ID si está activa
const getAtencionById = async (req, res) => {
  try {
    const { id } = req.params;
    const atencion = await Atenciones.findOne({
      where: { IdAtencion: id, idEstadoAtencion: 1 },
    });

    if (!atencion) {
      return res.status(404).json({ error: 'Atención no encontrada o eliminada' });
    }

    res.status(200).json(atencion);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la atención' });
  }
};

// Crear una nueva atención
const createAtencion = async (req, res) => {
  try {
    const {
      IdPaciente,
      Edad,
      FechaIngreso,
      IdServicioIngreso,
      IdMedicoIngreso,
      idFuenteFinanciamiento,
      IdTipoServicio,
      IdOrigenAtencion,
    } = req.body;

    const nuevaAtencion = await Atenciones.create({
      IdPaciente,
      Edad,
      FechaIngreso,
      IdServicioIngreso,
      IdMedicoIngreso,
      idFuenteFinanciamiento,
      IdTipoServicio,
      IdOrigenAtencion,
      idEstadoAtencion: 1, // Por defecto activa
    });

    res.status(201).json(nuevaAtencion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la atención' });
  }
};

// Actualizar una atención
const updateAtencion = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;

    const atencion = await Atenciones.findOne({
      where: { IdAtencion: id, idEstadoAtencion: 1 },
    });

    if (!atencion) {
      return res.status(404).json({ error: 'Atención no encontrada o eliminada' });
    }

    await atencion.update(datosActualizados);

    res.status(200).json(atencion);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la atención' });
  }
};

// Borrado lógico de una atención
const deleteAtencion = async (req, res) => {
  try {
    const { id } = req.params;

    const atencion = await Atenciones.findOne({
      where: { IdAtencion: id, idEstadoAtencion: 1 },
    });

    if (!atencion) {
      return res.status(404).json({ error: 'Atención no encontrada o ya eliminada' });
    }

    // Borrado lógico
    await atencion.update({ idEstadoAtencion: 0 });

    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la atención' });
  }
};

const getAtencionsByFechasAndIdservicio = async (req, res) => {
  try {
      // Datos enviados desde el formulario
      const { idservicio, fecha } = req.body;

      // Validar datos requeridos
      if (!idservicio || !fecha) {
          return res.status(400).json({ message: 'Los campos idservicio y fecha son obligatorios.' });
      }

      // Convertir la fecha al formato esperado por la base de datos (opcional)
      const fechaInicio = new Date(fecha);
      const fechaFin = new Date(fecha);
      fechaFin.setHours(23, 59, 59, 999);
    
      // Consultar atenciones con filtros
      const atenciones = await Atenciones.findAll({
          where: {
              IdServicioIngreso: idservicio,
              FechaIngreso: {
                  [Op.between]: [fechaInicio, fechaFin], // Rango para incluir todo el día
              },
          },
          include: [
            {
                model: Servicios, // Modelo relacionado con Atenciones
            },
            {
                model: Pacientes, // Modelo relacionado con Atenciones
            },
          ]
      });

      // Verificar si hay resultados
      if (atenciones.length === 0) {
          return res.status(404).json({ message: 'No se encontraron atenciones con los criterios especificados.' });
      }

      // Responder con los resultados
      res.status(200).json(atenciones);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocurrió un error al buscar las atenciones.', error });
  }
};

module.exports = {
  getAllAtenciones,
  getAtencionById,
  createAtencion,
  updateAtencion,
  deleteAtencion,
  getAtencionsByFechasAndIdservicio
};
