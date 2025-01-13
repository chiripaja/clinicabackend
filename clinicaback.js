const express = require('express');
require('dotenv').config();
const { sequelize } = require('./sequelize/sequelize');
const app = express()
const cors = require('cors');
//DIRECTORIO PUBLICO
app.use(express.static('public'));
app.use(express.json());
app.use(cors())
sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
//RUTAS


app.use('/api/tipodocumento',require('./router/TipoDocumentoRouter'));
app.use('/api/proveedor',require('./router/proveedorRoutes'));
app.use('/api/fuentefinanciamiento',require('./router/FuenteFinanciamientoRouter'));
app.use('/api/empleado',require('./router/EmpleadoRoutes'));
app.use('/api/tiposgeneral',require('./router/TiposGeneralRouter'));
app.use('/api/factCatalogoBienesInsumos',require('./router/factCatalogoBienesInsumosRoutes'));
app.use('/api/lotes',require('./router/LotesRouter'));
app.use('/api/medicamentos',require('./router/MedicamentoRouter'));
app.use('/api/movimientos',require('./router/MovimientoRouter'));
app.use('/api/stock',require('./router/StockRouter'));
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})