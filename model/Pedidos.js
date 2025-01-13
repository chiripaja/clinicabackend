const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Pedidos = sequelize.define('Pedidos', {
    id_pedido : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_proveedor : DataTypes.INTEGER,
    fecha_pedido : DataTypes.STRING,
    estado  : DataTypes.DATE,//PENDIENTE, RECIBIDO, CANCELADO
    total : DataTypes.DATE
}, {
    tableName: 'Pedidos'
})

module.exports = Pedidos