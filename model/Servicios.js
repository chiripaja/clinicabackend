const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Servicios=sequelize.define('Servicios',{
    id_servicio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_servicio: DataTypes.STRING
},{
    tableName: 'Servicios',
    timestamps: false 
})

module.exports=Servicios