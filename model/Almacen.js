const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Almacen=sequelize.define('Almacen',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre : DataTypes.STRING,
    ubicacion  : DataTypes.STRING,
    descripcion   : DataTypes.STRING,
},{
    tableName: 'Almacen',
    timestamps: false 
})

module.exports=Almacen