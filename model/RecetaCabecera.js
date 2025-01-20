const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const RecetaCabecera=sequelize.define('RecetaCabecera',{
    idreceta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FechaReceta: DataTypes.DATE,
    idatencion: DataTypes.INTEGER,
    idEstado:DataTypes.INTEGER
},{
    tableName: 'RecetaCabecera',
    timestamps: false 
})

module.exports=RecetaCabecera