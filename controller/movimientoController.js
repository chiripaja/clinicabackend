const Movimientos = require("../model/Movimientos");

// Obtener todos los movimientos
const getAllMovimientos = async (req, res) => {
    try {
        const movimientos = await Movimientos.findAll();
        res.status(200).json(movimientos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los movimientos', details: error.message });
    }
};

// Obtener un movimiento por ID
const getMovimientoById = async (req, res) => {
    const { id } = req.params;
    try {
        const movimiento = await Movimientos.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({ error: 'Movimiento no encontrado' });
        }
        res.status(200).json(movimiento);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el movimiento', details: error.message });
    }
};

// Crear un nuevo movimiento
const createMovimiento = async (req, res) => {
    const {id_medicamento, id_lote,id_almacen, tipo_movimiento, cantidad,precio_venta,precio_compra, observaciones, id_proveedor, usuario_responsable } = req.body;
    try {
        const nuevoMovimiento = await Movimientos.create({
            id_medicamento,
            id_lote,
            id_almacen,
            tipo_movimiento,
            cantidad,
            precio_venta,
            precio_compra,
            observaciones,
            id_proveedor,
            usuario_responsable
        });
        res.status(201).json(nuevoMovimiento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el movimiento', details: error.message });
    }
};

// Actualizar un movimiento existente
const updateMovimiento = async (req, res) => {
    const { id } = req.params;
    const { id_medicamento, id_lote,id_almacen, tipo_movimiento, cantidad,precio_venta,precio_compra, observaciones, id_proveedor, usuario_responsable } = req.body;
    try {
        const movimiento = await Movimientos.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({ error: 'Movimiento no encontrado' });
        }
        await movimiento.update({
            id_medicamento,
            id_lote,
            id_almacen,
            tipo_movimiento,
            cantidad,
            precio_venta,
            precio_compra,
            observaciones,
            id_proveedor,
            usuario_responsable
        });
        res.status(200).json(movimiento);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el movimiento', details: error.message });
    }
};

// Eliminar un movimiento
const deleteMovimiento = async (req, res) => {
    const { id } = req.params;
    try {
        const movimiento = await Movimientos.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({ error: 'Movimiento no encontrado' });
        }
        await movimiento.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el movimiento', details: error.message });
    }
};

module.exports = {
    getAllMovimientos,
    getMovimientoById,
    createMovimiento,
    updateMovimiento,
    deleteMovimiento,
};
