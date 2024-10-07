const express = require('express'); // Asegúrate de que esta línea sea correcta
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hola mundo');
});

app.get('/', (req, res) => {
    res.send('Bienvenidos a mi Biblioteca');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

//datos

const libros = [
    { id: 1, titulo: 'El Quijote', autor: 'Miguel de Cervantes' },
    { id: 2, titulo: 'La Divina Comedia', autor: 'Dante Alighieri' },
    { id: 3, titulo: '1984', autor: 'George Orwell' }
];

// get all
app.get("/libros", (req, res) => {
    res.json(libros);
})

//get one
app.get("/libros/:id", (req, res) => {
    const libro = libros.find(li => li.id === parseInt(req.params.id)); 
    if (libro){
        res.json(libro);
    }  else {
        res.status(404).send("libro no encontrado");
    }
})