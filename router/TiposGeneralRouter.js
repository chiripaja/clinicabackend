// host + /api/tiposgeneral
const {Router}=require('express')
const { findallSexo } = require('../controller/tipoSexoController')
const {  findallTipoDocumento } = require('../controller/tipoDocumentoController')

const router=Router()

router.get("/tiposexo",findallSexo)
      .get("/tipodocumento",findallTipoDocumento)

module.exports=router