const express = require('express')
const path = require("path")
const hbs = require('hbs')
const app = express();
const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialsPath = path.join(__dirname,"../templates/partials")

 
app.set("view engine","hbs");
app.set("views",templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
}) 

 

app.get("/hello",(req,res)=>{
    res.send("hello world")
})

app.listen(5000,()=>{
    console.log(`listening to the port 5000`)
})