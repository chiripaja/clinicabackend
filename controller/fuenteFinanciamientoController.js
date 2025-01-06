const {response}=require('express');

const FuenteFinancimiento = require('../model/FuenteFinanciamiento');

const findallFF = async (req, res = response) => {   
    try {
        const response = await FuenteFinancimiento.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}




module.exports={
    findallFF
}