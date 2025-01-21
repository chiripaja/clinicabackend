const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');
const RecetaDetalle = require('./RecetaDetalle');



const RecetaCabecera=sequelize.define('RecetaCabecera',{
    idreceta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FechaReceta: DataTypes.DATE,
    idatencion: DataTypes.INTEGER,
    idEstado:DataTypes.INTEGER
},{
    tableName: 'RecetaCabecera',
    timestamps: false 
})


RecetaCabecera.hasMany(RecetaDetalle, {
    foreignKey: 'idreceta',  // Clave foránea en RecetaDetalle
    sourceKey: 'idreceta',   // Clave primaria en RecetaCabecera

});


module.exports=RecetaCabecera

