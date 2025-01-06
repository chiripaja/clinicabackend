// host + /api/sexo
const {Router}=require('express')
const { findallSexo } = require('../controller/tipoSexoController')

const router=Router()

router.get("/",findallSexo)

module.exports=router