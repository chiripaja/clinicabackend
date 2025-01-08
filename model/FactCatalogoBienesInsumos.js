const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const FactCatalogoBienesInsumos=sequelize.define('FactCatalogoBienesInsumos',{
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    concentracion:DataTypes.STRING,
    presentacion:DataTypes.STRING,
    formafarmaceutica:DataTypes.STRING,
    laboratorio: DataTypes.STRING,
    lote: DataTypes.STRING,
    fechavencimiento:DataTypes.DATE,
    precioventa:DataTypes.DOUBLE,
    stock :DataTypes.INTEGER,
    estado : DataTypes.BOOLEAN,
    tiposervicio:DataTypes.INTEGER //1 farmacia 2 procedimientos
},{
    tableName: 'FactCatalogoBienesInsumos',
    timestamps: false 
})

module.exports=FactCatalogoBienesInsumos