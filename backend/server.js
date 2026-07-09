const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión:', err))

const cotizacionesRouter = require('./routes/cotizaciones')
const proyectosRouter = require('./routes/proyectos')

app.use('/api/cotizaciones', cotizacionesRouter)
app.use('/api/proyectos', proyectosRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))