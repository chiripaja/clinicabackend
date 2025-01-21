const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');
const Medicamentos = require('./Medicamentos');



const RecetaDetalle=sequelize.define('RecetaDetalle',{
    idrecetadetalle: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idreceta: DataTypes.INTEGER,
    idItem:DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio:DataTypes.DOUBLE,
    total:DataTypes.DOUBLE,
    iddiagnostico:DataTypes.INTEGER,
    idestadodetalle:DataTypes.INTEGER,
    idtiporecetadetalle:DataTypes.INTEGER,//1 farmacia 2 procedimientos
    idpuntocarga:DataTypes.INTEGER,//1 punto de carga farmacia
    observaciones:DataTypes.STRING,
},{
    tableName: 'RecetaDetalle',
    timestamps: false 
})

RecetaDetalle.belongsTo(Medicamentos, {
    foreignKey: 'idItem',  
    targetKey: 'id_medicamento'   
});

module.exports=RecetaDetalle

