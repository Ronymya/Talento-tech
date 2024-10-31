const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Tu usuario de MySQL
    password: '',          // La contraseña de MySQL en XAMPP (deja vacío si no tiene)
    database: 'tienda'     // El nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

module.exports = connection;
