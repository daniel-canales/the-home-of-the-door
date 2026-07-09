const express = require('express')
const router = express.Router()
const Cotizacion = require('../models/Cotizacion')

router.get('/', async (req, res) => {
  const cotizaciones = await Cotizacion.find()
  res.json(cotizaciones)
})

router.get('/:id', async (req, res) => {
  const cotizacion = await Cotizacion.findById(req.params.id)
  res.json(cotizacion)
})

router.post('/', async (req, res) => {
  const nueva = new Cotizacion(req.body)
  await nueva.save()
  res.json(nueva)
})

router.put('/:id', async (req, res) => {
  const actualizada = await Cotizacion.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(actualizada)
})

router.delete('/:id', async (req, res) => {
  await Cotizacion.findByIdAndDelete(req.params.id)
  res.json({ mensaje: 'Cotización eliminada' })
})

module.exports = router