const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Lotes = sequelize.define('Lotes', {
    id_lote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_medicamento: DataTypes.INTEGER,
    numero_lote: DataTypes.STRING,
    fecha_fabricacion : DataTypes.DATE,
    fecha_vencimiento: DataTypes.DATE,
    cantidad_ingreso: DataTypes.INTEGER,//cantidad ingresada
    cantidad_actual: DataTypes.INTEGER,//cantidad del lote en tiempo real
    id_almacen : DataTypes.INTEGER,
    precio_compra_lote:DataTypes.DOUBLE,
    id_proveedor :DataTypes.INTEGER,
    observaciones:DataTypes.STRING,
}, {
    tableName: 'Lotes'
})

module.exports = Lotes