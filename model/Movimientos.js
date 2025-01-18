const { DataTypes, DOUBLE } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');
const Medicamentos = require('./Medicamentos');
const Lotes = require('./Lotes');
const Almacen = require('./Almacen');
const Proveedor = require('./Proveedores');


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

Movimientos.belongsTo(Medicamentos, {
    foreignKey: 'id_medicamento', 
    targetKey: 'id_medicamento', 
});

Movimientos.belongsTo(Lotes, {
    foreignKey: 'id_lote', 
    targetKey: 'id_lote', 
});

Movimientos.belongsTo(Almacen, {
    foreignKey: 'id_almacen', 
    targetKey: 'id', 
});

Movimientos.belongsTo(Proveedor, {
    foreignKey: 'id_proveedor', 
    targetKey: 'id_proveedor', 
});