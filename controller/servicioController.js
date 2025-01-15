const Servicios = require("../model/Servicios");


// Obtener todos los servicios
const getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicios.findAll();
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios' });
  }
};

// Obtener un servicio por ID
const getServicioById = async (req, res) => {
  try {
    const { id } = req.params;
    const servicio = await Servicios.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
};

// Crear un nuevo servicio
const createServicio = async (req, res) => {
  try {
    const { nombre_servicio } = req.body;
    const nuevoServicio = await Servicios.create({ nombre_servicio });
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
};

// Actualizar un servicio
const updateServicio = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_servicio } = req.body;

    const servicio = await Servicios.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    servicio.nombre_servicio = nombre_servicio;
    await servicio.save();

    res.status(200).json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
};

// Eliminar un servicio
const deleteServicio = async (req, res) => {
  try {
    const { id } = req.params;

    const servicio = await Servicios.findByPk(id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    await servicio.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
};

module.exports = {
  getAllServicios,
  getServicioById,
  createServicio,
  updateServicio,
  deleteServicio,
};
