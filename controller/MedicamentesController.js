//const Medicamentos = require('../models/Medicamentos');

const Medicamentos = require("../model/Medicamentos");

// Obtener todos los medicamentos
const getAllMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamentos.findAll();
        res.json(medicamentos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener medicamentos' });
    }
};

// Obtener un medicamento por ID
const getMedicamentoById = async (req, res) => {
    try {
        const { id } = req.params;
        const medicamento = await Medicamentos.findByPk(id);
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento no encontrado' });
        }
        res.json(medicamento);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el medicamento' });
    }
};

// Crear un nuevo medicamento
const createMedicamento = async (req, res) => {
    try {
        const { nombre, descripcion, presentacion, unidad_medida, precio_compra,precio_venta } = req.body;
        const newMedicamento = await Medicamentos.create({
            nombre,
            descripcion,
            presentacion,
            unidad_medida,
            precio_compra,
            precio_venta,
        });
        res.status(201).json(newMedicamento);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el medicamento' });
    }
};

// Actualizar un medicamento existente
const updateMedicamento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, presentacion, unidad_medida, precio_compra,precio_venta } = req.body;

        const medicamento = await Medicamentos.findByPk(id);
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento no encontrado' });
        }

        await medicamento.update({
            nombre,
            descripcion,
            presentacion,
            unidad_medida,
            precio_compra,
            precio_venta,
        });

        res.json(medicamento);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el medicamento' });
    }
};

// Eliminar un medicamento
const deleteMedicamento = async (req, res) => {
    try {
        const { id } = req.params;

        const medicamento = await Medicamentos.findByPk(id);
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento no encontrado' });
        }

        await medicamento.destroy();
        res.json({ message: 'Medicamento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el medicamento' });
    }
};

module.exports = {
    getAllMedicamentos,
    getMedicamentoById,
    createMedicamento,
    updateMedicamento,
    deleteMedicamento,
};
