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

// llama a todos los libros que tenemos en el array
app.get("/libros", (req, res) => {
    res.json(libros);
})

//llama un libro especifico en el array
app.get("/libros/:id", (req, res) => {
    const libro = libros.find(li => li.id === parseInt(req.params.id)); 
    if (libro){
        res.json(libro);
    }  else {
        res.status(404).send("libro no encontrado");
    }
})

// crear un libro
app.use(express.json()); //recibir en el body un json

app.post("/libros", (req, res) => {

    const nuevoLibro = {id: libros.length + 1, ...req.body}; //id sera 1 + que el ultimo libro
    //libbros.length es el tamaño del arreglo y a eso se le suma 1
    libros.push(nuevoLibro); //añade ese nuevo libro al array;
    res.status(201).json(nuevoLibro);

})

//elimina un libro
app.delete("/libros/:id", (req, res) => {
    const idLibro = parseInt(req.params.id); // convierte el parametro en id del libro
    const indiceLibro = libros.findIndex(li => li.id === idLibro); // busca el indice del libro en el array
   
    if (indiceLibro !== -1){
        const libroEliminado = libros.splice(indiceLibro, 1); //elimina el libro del array
        res.json({ mensaje: "libro eliminado", libro: libroEliminado[0]});
    }else{
        res.status(404).json({ mensaje: "libro no encontrado"}); // si no se encuentra el libro, devuelve error
    }

})