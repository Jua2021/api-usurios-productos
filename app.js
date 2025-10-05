require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
const usuarioRoutes = require('./routes/usuarios');
const productoRoutes = require('./routes/productos');
app.use('/api/productos', productoRoutes);
app.use('/api/usuarios', usuarioRoutes);

app.use(cors());



const fs = require('fs');
const Cliente = require('./models/Usuario');

async function precargarClientes() {
  const existe = await Cliente.countDocuments();
  if (existe === 0) {
    const datos = JSON.parse(fs.readFileSync('./clientes.json', 'utf-8'));
    await Cliente.insertMany(datos);
    console.log('Clientes precargados automáticamente');
  }
}

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await precargarClientes(); 
    app.listen(3000, () => {
      console.log('Servidor corriendo en puerto 3000');
    });
  })
  .catch(err => {
    console.error('Error al conectar con MongoDB', err);
  });