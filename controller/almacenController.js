const {response}=require('express');
const Almacen = require('../model/Almacen');



const findAllAlmacen = async (req, res = response) => {   
    try {
        const response = await Almacen.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}




module.exports={
    findAllAlmacen
}