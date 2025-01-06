const { DataTypes } = require('sequelize');
const sequelize = require('../sequilize/sequilize');


const Pacientes=sequelize.define('Pacientes',{
    IdTipoSexo: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    Descripcion: DataTypes.STRING
},{
    tableName: 'Pacientes',
    timestamps: false 
})

