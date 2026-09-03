const express = require('express')
const router = express.Router()
const Proyecto = require('../models/Proyecto')
const verificarToken = require('../middleware/auth')

router.get('/', async (req, res) => {
  const proyectos = await Proyecto.find()
  res.json(proyectos)
})

router.get('/:id', async (req, res) => {
  const proyecto = await Proyecto.findById(req.params.id)
  res.json(proyecto)
})

router.post('/', verificarToken, async (req, res) => {
  const nuevo = new Proyecto(req.body)
  await nuevo.save()
  res.json(nuevo)
})

router.put('/:id', verificarToken, async (req, res) => {
  const actualizado = await Proyecto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(actualizado)
})

router.delete('/:id', verificarToken, async (req, res) => {
  await Proyecto.findByIdAndDelete(req.params.id)
  res.json({ mensaje: 'Proyecto eliminado' })
})

module.exports = router