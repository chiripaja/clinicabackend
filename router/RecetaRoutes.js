// host + /api/recetas
const {Router}=require('express')
const { createRecetaFarmacia } = require('../controller/RecetaController')


const router=Router()

router.post("/farmacia",createRecetaFarmacia)

module.exports=router