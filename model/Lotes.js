const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Lotes = sequelize.define('Lotes', {
    id_lote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medicamento: DataTypes.INTEGER,
    numero_lote: DataTypes.STRING,
    fecha_vencimiento: DataTypes.DATE,
    cantidad_inicial: DataTypes.INTEGER,
    cantidad_actual: DataTypes.INTEGER,
    ubicacion: DataTypes.STRING,
}, {
    tableName: 'Lotes',
    timestamps: false
})

module.exports = Lotes