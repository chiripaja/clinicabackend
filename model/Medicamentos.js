const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Medicamentos = sequelize.define('Medicamentos', {
    id_medicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    presentacion : DataTypes.STRING,
    unidad_medida: DataTypes.STRING,
    precio_compra: DataTypes.DOUBLE,
    precio_venta : DataTypes.DOUBLE
}, {
    tableName: 'Medicamentos',
    timestamps: false
})

module.exports = Medicamentos