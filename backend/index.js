const express = require('express');
const app = express();
const sql = require('mysql');
const PORT = process.env.PORT || 3400;

sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tan17112003',
    database: 'isinhvien'
})
app.use(PORT, () => {
    console.log('Project is running')
})