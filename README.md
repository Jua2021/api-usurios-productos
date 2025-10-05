API del Proyecto – Evidencia GA4-220501096-AA1-EV01

Esta API permite gestionar usuarios y productos mediante operaciones CRUD (crear, consultar, actualizar y eliminar). Está desarrollada con Node.js, Express y MongoDB, utilizando el formato JSON para el intercambio de datos.

Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Postman (para pruebas)
- Visual Studio Code

Cómo ejecutar el proyecto
1. Clonar el repositorio.  
2. Instalar dependencias:  
   `npm install`  
3. Configurar el archivo `.env` con la cadena de conexión a MongoDB:  
   `MONGO_URI=mongodb://localhost:27017/mi_basedatos`  
4. Ejecutar el servidor:  
   `npm start`  
5. Probar las rutas con Postman en `http://localhost:3000`

Pruebas realizadas
- Inserción de usuarios y productos  
- Consulta general y por ID  
- Actualización y eliminación  
- Validación de campos obligatorios  
- Pruebas con Postman

   
