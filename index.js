const express = require('express'); // Asegúrate de que esta línea sea correcta
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});