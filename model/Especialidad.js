const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Especialidades=sequelize.define('Especialidades',{
    id_especialidades: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_especialidad: DataTypes.STRING
},{
    tableName: 'Especialidades',
    timestamps: false 
})

module.exports=Especialidades