const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Movimientos = sequelize.define('Movimientos', {
    id_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_lote: DataTypes.INTEGER,
    tipo_movimiento: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    fecha_movimiento: DataTypes.DATE,
    observaciones: DataTypes.STRING,
    id_proveedor: DataTypes.INTEGER,
    usuario_responsable: DataTypes.STRING,
}, {
    tableName: 'Movimientos',
    timestamps: false
})

module.exports = Movimientos