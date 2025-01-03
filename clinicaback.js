const express = require('express');
require('dotenv').config();
const { sequelize } = require('./sequelize/sequelize');
const app = express()

//DIRECTORIO PUBLICO
app.use(express.static('public'));

sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
//RUTAS
//TODO:auth
app.use('/api/auth',require)
//tipoDocumento
app.use('/api/tipodocumento',require('./router/TipoDocumentoRouter'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})