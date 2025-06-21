const express = require('express')
const app = express();
const port = 3000;

const usuarioRutas = require('./routes/usuario.routes');
app.use(express.json());

app.use('/api',usuarioRutas);

app.listen(port, () => {
  console.log(`Ejecutando por el puerto ${port}`);
})
