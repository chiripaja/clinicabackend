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
    fecha_fabricacion : DataTypes.DATE,
    fecha_vencimiento: DataTypes.DATE,
    cantidad_inicial: DataTypes.INTEGER,
    cantidad_actual: DataTypes.INTEGER,
    id_almacen : DataTypes.INTEGER,
    precio_compra_lote:DataTypes.DOUBLE
}, {
    tableName: 'Lotes'
})

module.exports = Lotes