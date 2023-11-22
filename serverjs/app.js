const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 8090;

//********************   CONEXIÓN A LA BASE DE DATOS  *********************/
const db = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root_password',
    database: 'prueba'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos EXITOSA!!!');
    }
});

// ****************    CONSULTA GET  *******************
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM alumnos';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            res.status(500).send('Error al consultar la base de datos');
        } else {
            res.json(result);
        }
    });
});

// ************   AGREGAR POST   ******************
app.post('/agregar', (req, res) => {
    const { nombre, apellido, dni } = req.body;
    const sql = 'INSERT INTO alumnos (Nombre, Apellido, Dni) VALUES (?, ?, ?)';
    db.query(sql, [nombre, apellido, dni], (err, result) => {
        if (err) {
            console.error('Error al agregar alumno:', err);
            res.status(500).send('Error al agregar alumno');
        } else {
            res.status(201).send('Alumno agregado correctamente');
        }
    });
});

//******************    INICIALIZACIÓN DEL SERVIDOR    **************/
app.listen(port, () => {
    console.log(`Servidor sirviendoen  el puerto http://localhost/${port}`);
});
