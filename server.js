const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-commerce",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the Database");
  } else {
    console.log("Connected to the Database");
  }
});

server.use(express.static("./public", { extensions: ["html"] }));
server.get("/", (_, res) => {
  res.sendFile("./public/index");
});

server.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM accounts WHERE email = ? AND password = ?";
  connection.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    } else {
      const user = result[0];
      return res.status(200).json({ user });
    }
  });
});

server.get("/api/users", (_, res) => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.delete("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM users WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ ok: true });
    }
  });
});

//Accounts APIs
server.get("/api/accounts", (_, res) => {
  const query = "SELECT * FROM accounts";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.get("/api/account/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM accounts WHERE id= ${id} `;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.put("/api/account/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, password, role } = req.body;
  const query = `UPDATE accounts SET name=?, email=?, password=?, role=? WHERE id=${id}`;
  connection.query(query, [name, email, password, role], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ ok: true });
    }
  });
});

server.post("/api/add-account", (req, res) => {
  const { name, email, password, role } = req.body;
  let newAccount;
  const sql =
    "INSERT INTO accounts (name, email, password, role) VALUES (?, ?, ?, ?)";
  connection.query(sql, [name, email, password, role], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL database:", err);
      res.status(500).json({ error: "Failed to add account" });
      return;
    }
    newAccount = result;
    console.log("Account added successfully");
    res.status(200).json({ newAccount, ok: true });
  });
});

server.delete("/api/account/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM accounts WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ ok: true });
    }
  });
});

//Products APIs

server.post("/api/add-product", (req, res) => {
  const { title, price, stock_quantity, category, image } =
    req.body;
  let newProduct;
  const sql =
    "INSERT INTO products (title, price, stock_quantity, category, image) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [title, price, stock_quantity, category, image],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into MySQL database:", err);
        res.status(500).json({ error: "Failed to add product" });
        return;
      }
      newProduct = result;
      console.log("Product added successfully");
      res.status(200).json({ newProduct, ok: true });
    }
  );
});

server.get("/api/products", (_, res) => {
  const query = "SELECT * FROM products";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = `SELECT * FROM products WHERE id= ${id} `;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.put("/api/product/:id", (req, res) => {
  const id = req.params.id;
  const { title, price, stock_quantity, category, image } = req.body;
  const query = `UPDATE products SET title=?, price=?, stock_quantity=?, category=?, image=? WHERE id=${id}`;
  connection.query(
    query,
    [title, price, stock_quantity, category, image],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err });
      } else {
        return res.status(200).json({ ok: true });
      }
    }
  );
});

server.delete("/api/product/:id", (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM products WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ ok: true });
    }
  });
});

//Orders APIs
server.get("/api/orders", (_, res) => {
  const query = "SELECT * FROM orders";
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json(result);
    }
  });
});

server.put("/api/order/:id", (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const query = `UPDATE orders SET status=? WHERE order_id=${id}`;
  connection.query(query, [status], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      return res.status(200).json({ ok: true });
    }
  });
});

server.get("/api/getTotalNumber", (_, res) => {
  const ordersQuery =
    "SELECT COUNT(*) AS orderCount FROM orders WHERE status = 'pending';";
  const productsQuery = "SELECT COUNT(*) AS productCount FROM products";
  const usersQuery = "SELECT COUNT(*) AS userCount FROM users";

  connection.query(ordersQuery, (err, ordersResult) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    connection.query(productsQuery, (err, productsResult) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      connection.query(usersQuery, (err, usersResult) => {
        if (err) {
          return res.status(500).json({ error: err });
        }

        const orderCount = ordersResult[0].orderCount;
        const productCount = productsResult[0].productCount;
        const userCount = usersResult[0].userCount;

        return res.status(200).json({ orderCount, productCount, userCount });
      });
    });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
