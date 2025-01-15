const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Atenciones=sequelize.define('Atenciones',{
    IdAtencion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    IdPaciente: DataTypes.INTEGER,
    Edad: DataTypes.INTEGER,
    FechaIngreso: DataTypes.DATE,
    IdServicioIngreso: DataTypes.INTEGER,
    IdMedicoIngreso: DataTypes.INTEGER,
    idFuenteFinanciamiento: DataTypes.INTEGER,
    IdTipoServicio:DataTypes.INTEGER,
    IdOrigenAtencion:DataTypes.INTEGER,
    idEstadoAtencion: DataTypes.INTEGER,
},{
    tableName: 'Atenciones',
    timestamps: false 
})

module.exports=Atenciones