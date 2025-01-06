const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const FuenteFinancimiento=sequelize.define('FuenteFinancimiento',{
    id_ff: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion_ff: DataTypes.STRING
},{
    tableName: 'FuenteFinancimiento',
    timestamps: false 
})

module.exports=FuenteFinancimiento