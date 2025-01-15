// host + /api/tiposgeneral
const {Router}=require('express')
const { findallSexo } = require('../controller/tipoSexoController')
const {  findallTipoDocumento } = require('../controller/tipoDocumentoController')
const { findAllLotes } = require('../controller/lotesController')
const { findAllAlmacen } = require('../controller/almacenController')
const { findallFF } = require('../controller/fuenteFinanciamientoController')

const router=Router()

router.get("/tiposexo",findallSexo)
      .get("/tipodocumento",findallTipoDocumento)
      .get("/almacen",findAllAlmacen)
      .get("/fuentefinancimento",findallFF)

module.exports=router