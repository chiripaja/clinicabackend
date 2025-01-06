const { response } = require('express');
const Proveedor = require('../model/Proveedores');

// Obtener todos los proveedores (solo los activos)
const findAllProveedores = async (req, res = response) => {
    try {
        const proveedores = await Proveedor.findAll({ where: { estado: 1 } });
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Obtener un proveedor por ID
const findProveedorById = async (req, res = response) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findOne({ where: { id_proveedor: id, estado: 1 } });
        if (!proveedor) {
            return res.status(404).json({ success: false, message: 'Proveedor no encontrado o inactivo.' });
        }
        res.status(200).json(proveedor);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Crear un nuevo proveedor
const createProveedor = async (req, res = response) => {
    const { nombre_proveedor, ruc, direccion, telefono, email, tipo_proveedor, observaciones } = req.body;
    try {
        const nuevoProveedor = await Proveedor.create({
            nombre_proveedor,
            ruc,
            direccion,
            telefono,
            email,
            tipo_proveedor,
            observaciones,
        });
        res.status(201).json({ success: true, message: 'Proveedor creado exitosamente.', proveedor: nuevoProveedor });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Actualizar un proveedor por ID
const updateProveedor = async (req, res = response) => {
    const { id } = req.params;
    const { nombre_proveedor, ruc, direccion, telefono, email, tipo_proveedor, observaciones } = req.body;
    try {
        const proveedor = await Proveedor.findOne({ where: { id_proveedor: id, estado: 1 } });
        if (!proveedor) {
            return res.status(404).json({ success: false, message: 'Proveedor no encontrado o inactivo.' });
        }
        await Proveedor.update(
            { nombre_proveedor, ruc, direccion, telefono, email, tipo_proveedor, observaciones },
            { where: { id_proveedor: id } }
        );
        res.status(200).json({ success: true, message: 'Proveedor actualizado exitosamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Eliminar un proveedor de forma lógica
const deleteProveedorLogic = async (req, res = response) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findOne({ where: { id_proveedor: id, estado: 1 } });
        if (!proveedor) {
            return res.status(404).json({ success: false, message: 'Proveedor no encontrado o ya inactivo.' });
        }
        await Proveedor.update({ estado: 0 }, { where: { id_proveedor: id } });
        res.status(200).json({ success: true, message: 'Proveedor eliminado lógicamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Restaurar un proveedor eliminado lógicamente
const restoreProveedor = async (req, res = response) => {
    const { id } = req.params;
    try {
        const proveedor = await Proveedor.findOne({ where: { id_proveedor: id, estado: 0 } });
        if (!proveedor) {
            return res.status(404).json({ success: false, message: 'Proveedor no encontrado o ya activo.' });
        }
        await Proveedor.update({ estado: 1 }, { where: { id_proveedor: id } });
        res.status(200).json({ success: true, message: 'Proveedor restaurado exitosamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    findAllProveedores,
    findProveedorById,
    createProveedor,
    updateProveedor,
    deleteProveedorLogic,
    restoreProveedor,
};
