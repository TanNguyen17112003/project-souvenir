const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mysql');
const PORT = process.env.PORT || 3400;
app.use(cors());
app.use(express.json());
app.use(express.static('../client/src/images'));
const myDb = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tan17112003',
    database: 'souvenir'
})

app.get("/items", (req, res) => {
    const query = "SELECT * FROM item WHERE latest = 1";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.listen(PORT, () => {
    console.log('Project is running')
})