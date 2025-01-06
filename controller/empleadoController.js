const { response } = require('express');
const Empleado = require('../model/Empleado');


// Obtener todos los empleados (solo los activos)
const findAllEmpleados = async (req, res = response) => {
    try {
        const empleados = await Empleado.findAll({ where: { estado: 1 } });
        res.status(200).json(empleados);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Obtener un empleado por ID
const findEmpleadoById = async (req, res = response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findOne({ where: { id_empleado: id, estado: 1 } });
        if (!empleado) {
            return res.status(404).json({ success: false, message: 'Empleado no encontrado o inactivo.' });
        }
        res.status(200).json(empleado);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Crear un nuevo empleado
const createEmpleado = async (req, res = response) => {
    const { apellidoPaterno, apellidoMaterno, primerNombre, segundoNombre, usuario, clave, dni, tipoDocumento, fechaNacimiento } = req.body;
    try {
        const nuevoEmpleado = await Empleado.create({
            apellidoPaterno,
            apellidoMaterno,
            primerNombre,
            segundoNombre,
            usuario,
            clave,
            dni,
            tipoDocumento,
            fechaNacimiento,
            estado: 1,
        });
        res.status(201).json({ success: true, message: 'Empleado creado exitosamente.', empleado: nuevoEmpleado });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Actualizar un empleado por ID
const updateEmpleado = async (req, res = response) => {
    const { id } = req.params;
    const { apellidoPaterno, apellidoMaterno, primerNombre, segundoNombre, usuario, clave, dni, tipoDocumento, fechaNacimiento } = req.body;
    try {
        const empleado = await Empleado.findOne({ where: { id_empleado: id, estado: 1 } });
        if (!empleado) {
            return res.status(404).json({ success: false, message: 'Empleado no encontrado o inactivo.' });
        }
        await Empleado.update(
            { apellidoPaterno, apellidoMaterno, primerNombre, segundoNombre, usuario, clave, dni, tipoDocumento, fechaNacimiento },
            { where: { id_empleado: id } }
        );
        res.status(200).json({ success: true, message: 'Empleado actualizado exitosamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Eliminar un empleado de forma lógica
const deleteEmpleadoLogic = async (req, res = response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findOne({ where: { id_empleado: id, estado: 1 } });
        if (!empleado) {
            return res.status(404).json({ success: false, message: 'Empleado no encontrado o ya inactivo.' });
        }
        await Empleado.update({ estado: 0 }, { where: { id_empleado: id } });
        res.status(200).json({ success: true, message: 'Empleado eliminado lógicamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Restaurar un empleado eliminado lógicamente
const restoreEmpleado = async (req, res = response) => {
    const { id } = req.params;
    try {
        const empleado = await Empleado.findOne({ where: { id_empleado: id, estado: 0 } });
        if (!empleado) {
            return res.status(404).json({ success: false, message: 'Empleado no encontrado o ya activo.' });
        }
        await Empleado.update({ estado: 1 }, { where: { id_empleado: id } });
        res.status(200).json({ success: true, message: 'Empleado restaurado exitosamente.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    findAllEmpleados,
    findEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleadoLogic,
    restoreEmpleado,
};
