const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.postgres_uri,
});

// async function setupDatabase() {
//   try {
//     console.log("Contectando a la base de datos....");
//     await pool.query("Select Now()");
//     console.log("Conexión exitosa");
//     await pool.query(`
//             create table usuario (
//             id serial primary key,
//             nombre varchar(50) not null,
//             email varchar(50) unique not null,
//             contrasena varchar(100) not null
//             );
//             `);
//     console.log("Base de datos Creada con éxito");
//   } catch (error) {
//     console.log("Error: " + error);
//   }
// }
// setupDatabase();

module.exports = pool;
