const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Sexo=sequelize.define('Sexo',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: DataTypes.STRING
},{
    tableName: 'Sexo',
    timestamps: false 
})

module.exports=Sexo