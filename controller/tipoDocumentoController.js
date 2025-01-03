const {response}=require('express');


const TipoDocumento = require('../model/TipoDocumento');

const findall = async (req, res = response) => {   
    try {
        //const response = await TipoDocumento.findAll()
        res.status(200).json("hola mundo desde el contorlador")
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={
  
    findall
}