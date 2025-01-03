// host + /api/tipodocumento
const {Router}=require('express')
const { findall } = require('../controller/TipoDocumentoController')
const router=Router()

router.get("/",findall)

module.exports=router