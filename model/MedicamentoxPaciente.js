const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');



const Medicamento_Paciente = sequelize.define('Medicamento_Paciente', {
    id_medicamento_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_lote: DataTypes.INTEGER,
    id_paciente: DataTypes.INTEGER,
    cantidad:DataTypes.INTEGER,
    fecha_entrega:DataTypes.DATE,
    observaciones:DataTypes.STRING
}, {
    tableName: 'Medicamento_Paciente',
    timestamps: false
})

module.exports = Medicamento_Paciente