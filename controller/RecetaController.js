const {response}=require('express');
const RecetaCabecera = require('../model/RecetaCabecera');
const RecetaDetalle = require('../model/RecetaDetalle');
const Medicamentos = require('../model/Medicamentos');

const findByIdreceta=async(req,res=response)=>{
  try {
    const { id } = req.params;
    const data=await RecetaCabecera.findOne(
      {
        include:[
          {
            model:RecetaDetalle,
            include:[Medicamentos]
          }
          
        ],
        where: { idreceta: id}
      }
    )
    if (!data) {
      return res.status(404).json({ error: 'Receta no encontrada.' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta' });
  }
}


const createRecetaFarmacia = async (req, res = response) => {
    try {
      const recetaDetalles = req.body;
  
      if (!Array.isArray(recetaDetalles) || recetaDetalles.length === 0) {
        return res.status(400).json({ success: false, message: 'No hay datos para procesar.' });
      }
  
      // Crear la cabecera de la receta
      const nuevaReceta = await RecetaCabecera.create({
        FechaReceta: new Date(),
        idatencion: req.body.idatencion || 1, // Ajusta según tu lógica para el idatencion
        idEstado: req.body.idEstado || 1, // Ajusta según tu lógica para el estado
      });
  
      const idReceta = nuevaReceta.idreceta;
  
      // Crear los detalles de la receta
      const detallesInsertados = await RecetaDetalle.bulkCreate(
        recetaDetalles.map((detalle) => ({
          idreceta: idReceta,
          cantidad: detalle.cantidad,
          idItem:detalle.idmedicamento,
          precio: detalle.precio || 0, // Asigna un precio si está disponible en los datos
          total: detalle.cantidad * (detalle.precio || 0), // Calcular el total
          iddiagnostico: detalle.iddiagnostico || null,
          idestadodetalle: detalle.idestadodetalle || 1, // Estado predeterminado
          idtiporecetadetalle: 1, // Según la lógica (1 para farmacia)
          idpuntocarga:1,//
          observaciones: detalle.observaciones || '',
        }))
      );
  
      // Respuesta exitosa
      return res.status(201).json({
        success: true,
        message: 'Receta creada exitosamente.',
        receta: {
          cabecera: nuevaReceta,
          detalles: detallesInsertados,
        },
      });
    } catch (error) {
      console.error('Error al crear la receta:', error);
      return res.status(500).json({
        success: false,
        message: 'Error al procesar la solicitud.',
        error: error.message,
      });
    }
  };



module.exports={
    createRecetaFarmacia,
    findByIdreceta
}