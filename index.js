
const express = require("express");

const path = require("path");

const cors = require("cors");


const db = require("./config");


const bodyParser = require("body-parser");

const port = parseInt(process.env.port) || 8080;

const app = express();

const route = express.Router();

const {errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require("cookie-parser");

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
    app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)
//Home or /
route.get("^/$|/Fruit_And_Veg", (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'./view/index.html'));
})

app.listen(3000,() =>{
    console.log('Server is running')
});

app.use(errorHandling);