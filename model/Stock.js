const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Stock = sequelize.define('Stock', {
    id_lote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    stock_actual: DataTypes.INTEGER,
    stock_minimo: DataTypes.INTEGER,
}, {
    tableName: 'Stock',
    timestamps: false
})

module.exports = Stock