// host + /api/fuentefinanciamiento
const {Router}=require('express')
const { findallFF } = require('../controller/fuenteFinanciamientoController')

const router=Router()

router.get("/",findallFF)

module.exports=router