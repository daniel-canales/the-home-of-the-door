const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body

  if (usuario === process.env.ADMIN_USER && contrasena === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { usuario },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    return res.json({ token })
  }

  res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' })
})

module.exports = router