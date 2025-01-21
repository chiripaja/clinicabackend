// host + /api/recetas
const {Router}=require('express')
const { createRecetaFarmacia, findByIdreceta } = require('../controller/RecetaController')


const router=Router()

router.post("/farmacia",createRecetaFarmacia)
router.get('/:id', findByIdreceta);
module.exports=router

