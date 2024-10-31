const express = require('express');
const app = express();
const connection = require('./db');

app.use(express.json());

// Ruta para obtener todos los productos
app.get('/api/productos', (req, res) => {
    connection.query('SELECT * FROM Productos', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener productos' });
        }
        res.json(results);
    });
});

// Ruta para agregar un nuevo producto
app.post('/api/productos', (req, res) => {
    const { nombre, descripcion, precio, stock } = req.body;
    connection.query(
        'INSERT INTO Productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
        [nombre, descripcion, precio, stock],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al agregar producto' });
            }
            res.status(201).json({ id: results.insertId, nombre, descripcion, precio, stock });
        }
    );
});

// Ruta para actualizar un producto
app.put('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock } = req.body;
    connection.query(
        'UPDATE Productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, descripcion, precio, stock, id],
        (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error al actualizar producto' });
            }
            res.json({ mensaje: 'Producto actualizado' });
        }
    );
});

// Ruta para eliminar un producto
app.delete('/api/productos/:id', (req, res) => {
    const { id } = req.params;
    connection.query(
        'DELETE FROM Productos WHERE id = ?',
        [id],
        (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error al eliminar producto' });
            }
            res.json({ mensaje: 'Producto eliminado' });
        }
    );
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
