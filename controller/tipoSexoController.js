const {response}=require('express');

const Sexo = require('../model/TipoSexo');

const findallSexo = async (req, res = response) => {   
    try {
        const response = await Sexo.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}




module.exports={
    findallSexo
}