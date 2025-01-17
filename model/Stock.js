const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');
const Medicamentos = require('./Medicamentos');
const Almacen = require('./Almacen');



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

Stock.belongsTo(Medicamentos, {
    foreignKey: 'id_medicamento', 
    targetKey: 'id_medicamento', 
});

Stock.belongsTo(Almacen, {
    foreignKey: 'id_almacen', 
    targetKey: 'id', 
});



module.exports = Stock