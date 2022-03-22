const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"../", "public")));
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")))

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")))

app.get("/registro", (req, res) => res.sendFile(path.join(__dirname, "views", "registro.html")))

app.post("/registro", (req, res) => res.send("usuario registrado"))

app.listen(PORT, () => console.log("estoy funcionando en el puerto " + PORT));