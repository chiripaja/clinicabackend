// host + /api/lotes
const {Router}=require('express')
const {   getAllLotes,
    getLoteById,
    createLote,
    updateLote,
    deleteLote } = require('../controller/lotesController')
const router=Router()

router.get("/lotes",getAllLotes)
router.get('/', getAllLotes);
router.get('/:id', getLoteById);
router.post('/', createLote);
router.put('/:id', updateLote);
router.delete('/:id', deleteLote);

module.exports=router