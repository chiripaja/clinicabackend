const Stock = require("../model/Stock");


// Obtener todos los registros de stock
const getAllStock = async (req, res) => {
    try {
        const stock = await Stock.findAll();
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el stock', details: error.message });
    }
};

// Obtener un registro de stock por ID
const getStockById = async (req, res) => {
    const { id } = req.params;
    try {
        const stock = await Stock.findByPk(id);
        if (!stock) {
            return res.status(404).json({ error: 'Registro de stock no encontrado' });
        }
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el registro de stock', details: error.message });
    }
};

// Crear un nuevo registro de stock
const createStock = async (req, res) => {
    const { id_medicamento, id_almacen, cantidad_disponible } = req.body;
    try {
        const nuevoStock = await Stock.create({
            id_medicamento,
            id_almacen,
            cantidad_disponible,
        });
        res.status(201).json(nuevoStock);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el registro de stock', details: error.message });
    }
};

// Actualizar un registro de stock existente
const updateStock = async (req, res) => {
    const { id } = req.params;
    const { id_medicamento, id_almacen, cantidad_disponible } = req.body;
    try {
        const stock = await Stock.findByPk(id);
        if (!stock) {
            return res.status(404).json({ error: 'Registro de stock no encontrado' });
        }
        await stock.update({
            id_medicamento,
            id_almacen,
            cantidad_disponible,
        });
        res.status(200).json(stock);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el registro de stock', details: error.message });
    }
};

// Eliminar un registro de stock
const deleteStock = async (req, res) => {
    const { id } = req.params;
    try {
        const stock = await Stock.findByPk(id);
        if (!stock) {
            return res.status(404).json({ error: 'Registro de stock no encontrado' });
        }
        await stock.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro de stock', details: error.message });
    }
};

module.exports = {
    getAllStock,
    getStockById,
    createStock,
    updateStock,
    deleteStock,
};
