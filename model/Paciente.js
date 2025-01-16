const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize/sequelize');


const Pacientes=sequelize.define('Pacientes',{
    IdPaciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      IdDocIdentidad: DataTypes.INTEGER,
      ApellidoPaterno: DataTypes.STRING,
      ApellidoMaterno: DataTypes.STRING,
      PrimerNombre: DataTypes.STRING,
      SegundoNombre: DataTypes.STRING,
      FechaNacimiento: DataTypes.DATE,
      NroDocumento: {
        type: DataTypes.STRING,
        unique: true, // Asegura que sea único
      },
      Telefono: DataTypes.STRING,
      DireccionDomicilio: DataTypes.STRING,
      IdTipoSexo: DataTypes.INTEGER,
      IdEstadoCivil: DataTypes.INTEGER,
      IdPaisDomicilio: DataTypes.INTEGER,
      IdDistritoDomicilio: DataTypes.INTEGER,
      idestadopaciente:{
        type: DataTypes.TINYINT(1), // Define como TINYINT de un bit
        allowNull: false,
        defaultValue: 1, // Valor por defecto: 1
      }
},{
    tableName: 'Pacientes'
})

module.exports = Pacientes