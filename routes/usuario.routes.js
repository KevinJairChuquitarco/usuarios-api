const express = require('express');

const router = express.Router();

const db = require('../db/connection')
const md5 = require('md5');


router.get('/',(req,res)=>{
    res.json({"mensaje":"Bienvenidos a la Api"})
});
router.get('/mensaje',(req,res)=>{
    res.json({"mensaje":"Ingresa a las rutas del usuario"})
});

//ruta para mostrar todos los usuarios
router.get('/usuarios', async (req,res)=>{
    try {
        const result = await db.query('select *From usuario');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({"mensaje":"No se puede obterner los usuarios"})
        console.log("Error: "+error);
    }
})

//ruta para insertar un nuevo usuario
router.post('/usuario', async (req,res)=>{
    const { nombre, email, contrasena } = req.body;
    try {
        const contrasenaEncriptada = md5(contrasena);
        console.log(contrasenaEncriptada);
        const result = await db.query('Insert into usuario (nombre,email,contrasena) values ($1,$2,$3) returning *',[nombre,email, contrasenaEncriptada]);
        res.status(201).json({"mensaje":"Creado correctamente","datos":result.rows[0]});
    } catch (error) {
        res.status(500).json({"mensaje":"No se puede insertar usuario"})
        console.log("Error: "+ error)
    }
});


module.exports = router;