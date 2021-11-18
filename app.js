const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
// db connection start
const {Client} = require("pg");
const client = new Client({
    user: "postgres",
    password : "balaji",
    host : "localhost",
    port : 5432,
    database : "casinodbms"
});
client.connect()
.then(()=> console.log("Connected Successfully"))
.catch(err => console.log(err))
.finally(() => client.end());
// db connection end


// express setup
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(3000,()=>{
    console.log("server started on port 3000");
});