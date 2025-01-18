// Importa el modelo de Lotes

const Almacen = require("../model/Almacen");
const Lotes = require("../model/Lotes");
const Medicamentos = require("../model/Medicamentos");
const Movimientos = require("../model/Movimientos");
const Stock = require("../model/Stock");
const { sequelize } = require("../sequelize/sequelize");

// Obtener todos los lotes
const getAllLotes = async (req, res) => {
    try {
        const lotes = await Lotes.findAll({include:[Medicamentos,Almacen]});
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
    const { id_medicamento, numero_lote, fecha_fabricacion, fecha_vencimiento, cantidad_ingreso, id_almacen, precio_compra_lote, id_proveedor, observaciones } = req.body;

    const transaction = await sequelize.transaction();

    try {
        // Verificar si el medicamento existe
        const medicamento = await Medicamentos.findByPk(id_medicamento);
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento no encontrado' });
        }

        // Crear el nuevo lote
        const newLote = await Lotes.create({
            id_medicamento,
            numero_lote,
            fecha_fabricacion,
            fecha_vencimiento,
            cantidad_ingreso,
            cantidad_actual:cantidad_ingreso,
            id_almacen,
            precio_compra_lote,
            observaciones,
            id_proveedor
        }, { transaction });

        const newidlotegenerado = newLote.id_lote;

        // Registrar el movimiento de entrada
        const nuevoMovimiento = await Movimientos.create({
            id_medicamento,
            id_lote: newidlotegenerado,
            id_almacen,
            tipo_movimiento: 'ENTRADA',
            cantidad: cantidad_ingreso,
            precio_venta: medicamento.precio_venta,
            precio_compra: medicamento.precio_compra, 
            observaciones,
            id_proveedor,
            usuario_responsable: 1 // Cambiar por el ID del usuario autenticado
        }, { transaction });

        // Actualizar el stock
        const stockExistente = await Stock.findOne({
            where: { id_medicamento, id_almacen },
            transaction
        });

        if (stockExistente) {
            // Si existe, actualizar la cantidad disponible
            stockExistente.cantidad_disponible += cantidad_ingreso;
            await stockExistente.save({ transaction });
        } else {
            // Si no existe, crear un nuevo registro de stock
            await Stock.create({
                id_medicamento,
                id_almacen,
                cantidad_disponible: cantidad_ingreso
            }, { transaction });
        }

        // Confirmar la transacción
        await transaction.commit();

        // Respuesta exitosa
        res.status(201).json({ message: 'Lote creado exitosamente', lote: newLote, movimiento: nuevoMovimiento });
    } catch (error) {
        // Revertir la transacción en caso de error
        await transaction.rollback();
        console.error(error);
        res.status(500).json({ error: 'Error al crear el lote', details: error.message });
    }
};

// Actualizar un lote por ID
const updateLote = async (req, res) => {

    const { id } = req.params;

    const { id_medicamento, numero_lote, fecha_fabricacion, fecha_vencimiento, cantidad_ingreso, cantidad_actual, id_almacen, precio_compra_lote } = req.body;

    try {

        const lote = await Lotes.findByPk(id);

        if (!lote) {
            return res.status(404).json({ error: 'Lote no encontrado' });
        }
      

        lote.id_medicamento = id_medicamento;
        lote.numero_lote = numero_lote;
        lote.fecha_fabricacion = fecha_fabricacion;
        lote.fecha_vencimiento = fecha_vencimiento;
        lote.cantidad_ingreso = cantidad_ingreso;
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
    const { id } = req.params;

    try {
        const lote = await Lotes.findByPk(id);
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
