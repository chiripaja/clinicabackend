const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Diagnosticos=sequelize.define('Diagnosticos',{
    IdDiagnostico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CodigoCIE10: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    IdCapitulo:DataTypes.INTEGER
},{
    tableName: 'Diagnosticos',
    timestamps: false 
})

module.exports=Diagnosticos