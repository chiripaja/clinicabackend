const { DataTypes, DOUBLE } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Movimientos = sequelize.define('Movimientos', {
    id_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medicamento: DataTypes.INTEGER,
    id_lote: DataTypes.INTEGER,
    id_almacen: DataTypes.INTEGER,
    tipo_movimiento: DataTypes.STRING,//'ENTRADA', 'SALIDA', 'AJUSTE'
    cantidad: DataTypes.INTEGER,
    precio_venta: DataTypes.DOUBLE,   // Precio de venta en el momento del movimiento
    precio_compra: DataTypes.DOUBLE,  // Precio de compra en el momento del movimiento
    observaciones: DataTypes.STRING,
    id_proveedor: DataTypes.INTEGER,
    usuario_responsable: DataTypes.STRING
}, {
    tableName: 'Movimientos'
})

module.exports = Movimientos