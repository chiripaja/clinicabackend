const {response}=require('express');


const TipoDocumento = require('../model/TipoDocumento');

const findallTipoDocumento = async (req, res = response) => {   
    try {
        const response = await TipoDocumento.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const createTipoDocumento = async (req, res = response) => {
    try {
        const { descripcion } = req.body;
      
        if (!descripcion) {
            return res.status(400).send({ success: false, message: 'Descripcion es requerida' });
        }
        const nuevoTipoDocumento = await TipoDocumento.create({
            descripcion,
        });
        res.status(201).json({
            success: true,
            data: nuevoTipoDocumento,
        });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};


module.exports={
    createTipoDocumento,
    findallTipoDocumento
}