// host + /api/tipodocumento
const {Router}=require('express')
const {  findallTipoDocumento, createTipoDocumento } = require('../controller/tipoDocumentoController')

const router=Router()

router.get("/",findallTipoDocumento)
      .post("/",createTipoDocumento)

module.exports=router