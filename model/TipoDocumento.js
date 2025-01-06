const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const TipoDocumento=sequelize.define('TipoDocumento',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    descripcion: DataTypes.STRING
},{
    tableName: 'TipoDocumento',
    timestamps: false 
})

module.exports=TipoDocumento