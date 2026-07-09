const mongoose = require('mongoose')

const cotizacionSchema = new mongoose.Schema({
  nombre:      { type: String, required: true },
  telefono:    { type: String, required: true },
  correo:      { type: String },
  ciudad:      { type: String },
  tipo_mueble: { type: String, required: true },
  material:    { type: String },
  dimensiones: { type: String },
  descripcion: { type: String },
  presupuesto: { type: String },
  plazo:       { type: String },
  fecha:       { type: Date, default: Date.now }
})

module.exports = mongoose.model('Cotizacion', cotizacionSchema)