const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mysql');
const PORT = process.env.PORT || 3400;
app.use(cors());
app.use(express.json());
app.use(express.static('../client/src/assets/images'));
const myDb = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tan17112003',
    database: 'souvenir'
})
function queryPromise(db, sql, values) {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
}
  
app.get("/items", (req, res) => {
    const query = "SELECT * FROM product WHERE latest = 1";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})

app.get("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const query = "SELECT * FROM (SELECT * FROM flower UNION (SELECT * FROM animal) UNION (SELECT * FROM bag)  UNION (SELECT * FROM bear) UNION (SELECT * FROM coaster) UNION (SELECT * FROM hat) UNION (SELECT * FROM keychain) UNION (SELECT * FROM zodiac)) AS subTable WHERE id = ?";
    myDb.query(query, [itemId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
})

// Render flower items
app.get("/menu/flowers", (req, res) => {
    const query = "SELECT * FROM flower";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    }) 
})
// Render animal items
app.get("/menu/animals", (req, res) => {
    const query = "SELECT * FROM animal";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/bags", (req, res) => {
    const query = "SELECT * FROM bag";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/coasters", (req, res) => {
    const query = "SELECT * FROM coaster";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/bears", (req, res) => {
    const query = "SELECT * FROM bear";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/hats", (req, res) => {
    const query = "SELECT * FROM hat";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/keychains", (req, res) => {
    const query = "SELECT * FROM keychain";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
app.get("/menu/zodiacs", (req, res) => {
    const query = "SELECT * FROM zodiac";
    myDb.query(query, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})
// Handle for  signup
app.post("/signup", async (req, res) => {
    const { email, pwd } = req.body;
    const checkEmailQuery = "SELECT * FROM user WHERE email = ?";
    try {
      const results = await queryPromise(myDb, checkEmailQuery, [email]);
      if (results.length > 0) {
        return res.status(400).json({ message: "Email đã tồn tại." });
      } else {
        const insertQuery = "INSERT INTO user (email, pwd) VALUES (?, ?)";
        await queryPromise(myDb, insertQuery, [email, pwd]);
        return res.status(200).json({ message: "Đăng ký thành công!" });
      }
    } catch (error) {
      console.error("Lỗi khi xử lý yêu cầu đăng ký:", error);
      return res.status(500).json({ message: "Lỗi khi xử lý yêu cầu đăng ký." });
    }
});
// Handle for login
app.post("/login", async (req, res) => {
    const {email, pwd} = req.body;
    const checkUserQuery = "SELECT * FROM user WHERE email = ? AND pwd = ?";
    try {
        const results = await queryPromise(myDb, checkUserQuery, [email, pwd])
        if (results.length > 0) {
            return res.status(200).json({message: "Đăng nhập thành công!"})
        } else {
            return res.status(400).json({message: "Sai tài khoản hoặc mật khẩu!"})
        }
    }
    catch (e) {
        console.error("Lỗi khi đăng nhập vào hệ thống: ", e);
        return res.status(500).json({message: "Lỗi khi xử lý yêu cầu!"})
    }
})
// Handle for comments to contact
app.post("/contact", async (req, res) => {
    const {fullName, email, comments} = req.body;
    const insertCommentsQuery = "INSERT INTO contact (fullName, email, comments) VALUES (?, ?, ?)";
    myDb.query(insertCommentsQuery, [fullName, email, comments], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
})
// Handle when submitting order button
app.post("/order", async (req, res) => {
    const {email, idProduct, number} = req.body;
    const checkSameOrderQuery = "SELECT * FROM cart WHERE (email = ? AND idProduct = ?)";
    try {
        const result = await queryPromise(myDb, checkSameOrderQuery, [email, idProduct]);
        if (result.length > 0) {
            const increaseProductQuery = "UPDATE cart SET number = number + ? WHERE idProduct = ?";
            await queryPromise(myDb, increaseProductQuery, [number, idProduct])
            return res.status(200).json({'message': 'Gửi yêu cầu thành công'})
        }
        else {
            const insertOrderQuery = "INSERT INTO cart (email, idProduct, number) VALUES (?, ?, ?)";
            myDb.query(insertOrderQuery, [email, idProduct, number], (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(300).json(err);
                }
                return res.status(200).json(data);
            })
        }
    }
    catch (e) {
        return res.status(500).json({'message': 'Lỗi trên server'})
    }
})
// Get number of products of a particular user
app.get("/cart/:email", async (req, res) => {
    const email = req.params.email;
    const countProductQuery = "SELECT SUM(number) AS sumProduct FROM cart WHERE email = ?";
    myDb.query(countProductQuery, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(400).json(err);
        }
        return res.status(200).json(data);
    })
})
// Get list of products in cart
app.get("/cartProduct/:email", async (req, res) => {
    const email = req.params.email;
    const getListProductQuery = "SELECT id, name, link, number, cost FROM (cart INNER JOIN product ON idProduct = id) WHERE email = ?";
    myDb.query(getListProductQuery, [email], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(400).json(err);
        }
        return res.status(200).json(data);
    })
})
// Api for update number of Product
app.post("/cart/number", async (req, res) => {
    const {numberOfProduct, email, idProduct} = req.body;
    const updateNumberQuery = "UPDATE cart SET number = ? WHERE email = ? AND idProduct = ?";
    myDb.query(updateNumberQuery, [numberOfProduct, email, idProduct], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({err: "Message"})
        }
        return res.status(200).json(data);
    })
})
// Api for remove all items in cart
app.delete("/cart/remove/:email", async (req, res) => {
    const email = req.params.email;
    const removeAllItemsQuery = "DELETE FROM cart WHERE email = ?";
    myDb.query(removeAllItemsQuery, [email], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({err: "Message"})
        }
        return res.status(200).json(data);
    })
})
// Api for remove particular product in cart
app.delete("/cart/remove/:email/:id", async (req, res) => {
    const email = req.params.email;
    const idProduct = req.params.id;
    const removeProductQuery = "DELETE FROM cart WHERE email = ? AND idProduct = ?";
    myDb.query(removeProductQuery, [email, idProduct], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({err: "Message failed"})
        }
        return res.status(200).json(data);
    })
})
app.listen(PORT, () => {
    console.log('Project is running')
})