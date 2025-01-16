const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');
const Servicios = require('./Servicios');
const Pacientes = require('./Paciente');



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


Atenciones.belongsTo(Servicios, {
    foreignKey: 'IdServicioIngreso', // Clave foránea en Atenciones
    targetKey: 'id_servicio', // Clave primaria en Servicios

});

Atenciones.belongsTo(Pacientes, {
    foreignKey: 'IdPaciente',
    targetKey: 'IdPaciente'
});

module.exports=Atenciones