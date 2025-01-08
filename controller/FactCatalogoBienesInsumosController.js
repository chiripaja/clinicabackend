const FactCatalogoBienesInsumos = require("../model/FactCatalogoBienesInsumos");

// Obtener todos los bienes e insumos (solo activos)
const getBienesInsumos = async (req, res) => {
    try {
        const bienesInsumos = await FactCatalogoBienesInsumos.findAll({
            where: { estado: true }, // Solo activos
        });
        res.json(bienesInsumos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los bienes e insumos' });
    }
};

// Obtener un bien o insumo por ID (incluye verificación de estado)
const getBienInsumoById = async (req, res) => {
    const { id } = req.params;
    try {
        const bienInsumo = await FactCatalogoBienesInsumos.findOne({
            where: { id_producto: id, estado: true }, // Solo activos
        });
        if (!bienInsumo) {
            return res.status(404).json({ error: 'Bien o insumo no encontrado o inactivo' });
        }
        res.json(bienInsumo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el bien o insumo' });
    }
};

// Crear un nuevo bien o insumo
const createBienInsumo = async (req, res) => {
    try {
        const bienInsumo = await FactCatalogoBienesInsumos.create(req.body);
        res.status(201).json(bienInsumo);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el bien o insumo' });
    }
};

// Actualizar un bien o insumo
const updateBienInsumo = async (req, res) => {
    const { id } = req.params;
    try {
        const bienInsumo = await FactCatalogoBienesInsumos.findByPk(id);
        if (!bienInsumo || !bienInsumo.estado) {
            return res.status(404).json({ error: 'Bien o insumo no encontrado o inactivo' });
        }
        await bienInsumo.update(req.body);
        res.json(bienInsumo);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el bien o insumo' });
    }
};

// Borrado lógico de un bien o insumo (actualiza estado a false)
const deleteBienInsumo = async (req, res) => {
    const { id } = req.params;
    try {
        const bienInsumo = await FactCatalogoBienesInsumos.findByPk(id);
        if (!bienInsumo || !bienInsumo.estado) {
            return res.status(404).json({ error: 'Bien o insumo no encontrado o ya inactivo' });
        }
        await bienInsumo.update({ estado: false }); // Borrado lógico
        res.json({ message: 'Bien o insumo desactivado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al desactivar el bien o insumo' });
    }
};

module.exports = {
    getBienesInsumos,
    getBienInsumoById,
    createBienInsumo,
    updateBienInsumo,
    deleteBienInsumo,
};
