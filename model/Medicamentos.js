const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Medicamentos = sequelize.define('Medicamentos', {
    id_medicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: DataTypes.INTEGER,
    descripcion: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    unidad_medida: DataTypes.INTEGER,
    precio_unitario: DataTypes.DATE
}, {
    tableName: 'Medicamentos',
    timestamps: false
})

module.exports = Medicamentos