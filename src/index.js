const express = require("express")
var path = require("path")
const requests = require("request")
var app = express();
const hbs = require('hbs');
// const { request } = require("http");
// console.log(path.join(__dirname,"../public"));

 // const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

// app.use(express.static(staticPath))
app.set("view engine","hbs");
app.set('views',templatePath)
hbs.registerPartials(partialPath)

app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/about',(req,res)=>{
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=b9fcd932fe1f8a749dfe61b7b77d14f6`
        )
    .on("data",(chunk)=>{
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        
        res.write(arrData[0].name)
    })
    .on("end",(err)=>{
        if(err) return console.log("connection closed duw to errors",err)
        res.end();
    })
})
 
app.listen(5000,()=>{
    console.log("listing to port at 5000")
})

