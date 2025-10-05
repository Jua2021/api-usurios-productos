const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, telefono } = req.body; // 👈 Asegúrate de incluir 'telefono'
    const nuevoUsuario = new Usuario({ nombre, correo, telefono }); // 👈 Y de pasarlo aquí
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const usuario = await Usuario.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};