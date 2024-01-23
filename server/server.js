const express = require("express");
const app = express();
const PORT = 8080;
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
const cors = require("cors");
app.use(cors());
app.get("/api/home", (req, res) => res.json({ message: "Hello World" }));

app.listen(PORT, () => `Server started on port ${PORT}`);
