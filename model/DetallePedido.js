const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const DetallePedido = sequelize.define('DetallePedido', {
    id_detalle  : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_pedido  : DataTypes.INTEGER,
    id_medicamento  : DataTypes.INTEGER,
    cantidad   : DataTypes.INTEGER,//PENDIENTE, RECIBIDO, CANCELADO
    precio_unitario  : DataTypes.DOUBLE,
    precio_compra  : DataTypes.DOUBLE,
    precio_venta   : DataTypes.DOUBLE,
    subtotal   : DataTypes.DOUBLE //Cantidad * Precio unitario.
}, {
    tableName: 'DetallePedido'
})

module.exports = DetallePedido