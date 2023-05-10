const cors = require("cors");
const express = require("express");
require("dotenv").config()
const mongoose = require("mongoose");



//crear server

const app = express();
port = 3000

//conexion a la db
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Conexión a la BD
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;

//Setear manejo de eventos
app.use(cors());
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos"));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", require("./routes/routes"))
app.listen(port, () => console.log("EL servidor esta activo..."))







