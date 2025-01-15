// Importa el modelo de Lotes

const Lotes = require("../model/Lotes");

// Obtener todos los lotes
const getAllLotes = async (req, res) => {
    try {
        const lotes = await Lotes.findAll();
        res.status(200).json(lotes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los lotes', details: error.message });
    }
};

// Obtener un lote por ID
const getLoteById = async (req, res) => {
    const { id_lote } = req.params;
    try {
        const lote = await Lotes.findByPk(id_lote);
        if (!lote) {
            return res.status(404).json({ error: 'Lote no encontrado' });
        }
        res.status(200).json(lote);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el lote', details: error.message });
    }
};

// Crear un nuevo lote
const createLote = async (req, res) => {
    const { id_medicamento, numero_lote, fecha_fabricacion, fecha_vencimiento, cantidad_inicial, cantidad_actual, id_almacen, precio_compra_lote } = req.body;

    try {
        const newLote = await Lotes.create({
            id_medicamento,
            numero_lote,
            fecha_fabricacion,
            fecha_vencimiento,
            cantidad_inicial,
            cantidad_actual,
            id_almacen,
            precio_compra_lote
        });

        res.status(201).json({ message: 'Lote creado exitosamente', data: newLote });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el lote', details: error.message });
    }
};

// Actualizar un lote por ID
const updateLote = async (req, res) => {

    const { id } = req.params;

    const { id_medicamento, numero_lote, fecha_fabricacion, fecha_vencimiento, cantidad_inicial, cantidad_actual, id_almacen, precio_compra_lote } = req.body;

    try {

        const lote = await Lotes.findByPk(id);

        if (!lote) {
            return res.status(404).json({ error: 'Lote no encontrado' });
        }
      

        lote.id_medicamento = id_medicamento;
        lote.numero_lote = numero_lote;
        lote.fecha_fabricacion = fecha_fabricacion;
        lote.fecha_vencimiento = fecha_vencimiento;
        lote.cantidad_inicial = cantidad_inicial;
        lote.cantidad_actual = cantidad_actual;
        lote.id_almacen = id_almacen;
        lote.precio_compra_lote = precio_compra_lote;

        await lote.save();

        res.status(200).json({ message: 'Lote actualizado exitosamente', data: lote });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el lote', details: error.message });
    }
};

// Eliminar un lote por ID
const deleteLote = async (req, res) => {
    const { id_lote } = req.params;

    try {
        const lote = await Lotes.findByPk(id_lote);
        if (!lote) {
            return res.status(404).json({ error: 'Lote no encontrado' });
        }

        await lote.destroy();

        res.status(200).json({ message: 'Lote eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el lote', details: error.message });
    }
};

module.exports = {
    getAllLotes,
    getLoteById,
    createLote,
    updateLote,
    deleteLote
};
