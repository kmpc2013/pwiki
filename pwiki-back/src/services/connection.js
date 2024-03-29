const mysql = require('mysql2/promise');
require("dotenv").config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_INST
});


module.exports = connection;