const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');

const Proveedor=sequelize.define('Proveedor',{
    id_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombre_proveedor: DataTypes.STRING,
    ruc: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    tipo_proveedor: DataTypes.STRING,
    observaciones:DataTypes.STRING,
    estado: {
        type: DataTypes.TINYINT(1), // Define como TINYINT de un bit
        allowNull: false,
        defaultValue: 1, // Valor por defecto: 1
    },
},{
    tableName: 'Proveedor',
    timestamps: false 
})

module.exports=Proveedor