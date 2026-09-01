const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find({ rol: 'cliente' })
  res.json(usuarios)
})

router.post('/registro', async (req, res) => {
  try {
    const existe = await Usuario.findOne({ correo: req.body.correo })
    if (existe) return res.status(400).json({ mensaje: 'El correo ya está registrado' })
    const nuevo = new Usuario(req.body)
    await nuevo.save()
    res.json(nuevo)
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al registrar usuario' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ correo: req.body.correo, password: req.body.password })
    if (!usuario) return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' })
    res.json(usuario)
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión' })
  }
})

router.put('/:id', async (req, res) => {
  const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(actualizado)
})

router.delete('/:id', async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id)
  res.json({ mensaje: 'Usuario eliminado' })
})

module.exports = router