const express = require("express");
const app = express();
const PORT = 8080;
const jwt = require("jsonwebtoken");
const cors = require("cors");
/*const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "db", "db.json");
let isDbInit;
console.log(fs.constants);
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    isDbInit = false;
  } else {
    isDbInit = true;
  }
}); */
/* console.log(readFileSync("./db/db.json")); */

app.use(cors());
app.use(express.json());

app.post("/api/auth", (req, res) => {
  const { username, password } = req.body;
  const user = { id: 1, username: "Kristian" };

  if (username === "Kristian" && password === "Ujka") {
    const token = jwt.sign({ userId: user.id }, "secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/api/home", (req, res) => res.json({ message: "Hello World" }));

app.listen(PORT, () => `Server started on port ${PORT}`);
