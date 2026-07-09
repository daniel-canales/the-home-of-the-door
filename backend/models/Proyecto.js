const mongoose = require('mongoose')

const proyectoSchema = new mongoose.Schema({
  nombre:      { type: String, required: true },
  categoria:   { type: String, required: true },
  material:    { type: String },
  descripcion: { type: String },
  imagen:      { type: String },
  imagenes:    { type: [String] },
  fecha:       { type: Date, default: Date.now }
})

module.exports = mongoose.model('Proyecto', proyectoSchema)