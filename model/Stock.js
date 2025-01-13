const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Stock = sequelize.define('Stock', {
    id_stock : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medicamento: DataTypes.INTEGER,
    id_almacen : DataTypes.INTEGER,
    cantidad_disponible : DataTypes.INTEGER
}, {
    tableName: 'Stock'
})

module.exports = Stock