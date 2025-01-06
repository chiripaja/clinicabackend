const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Empleado=sequelize.define('Empleado',{
    id_empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    apellidoPaterno: DataTypes.STRING,
    apellidoMaterno: DataTypes.STRING,
    primerNombre: DataTypes.STRING,
    segundoNombre: DataTypes.STRING,
    usuario: DataTypes.STRING,
    clave: DataTypes.STRING,
    dni: DataTypes.STRING,
    tipoDocumento: DataTypes.INTEGER,
    fechaNacimiento: DataTypes.DATE,
    estado: {
        type: DataTypes.TINYINT(1), 
        allowNull: false,
        defaultValue: 1, 
    },
},{
    tableName: 'Empleado',
    timestamps: false 
})

module.exports=Empleado