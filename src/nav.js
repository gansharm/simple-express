 var express = require("express")

var nav = express();

nav.get('/',(req,res)=>{
    res.write("hello world")
    res.write("hello world from home page")
    res.send();
})
nav.get('/about',(req,res)=>{
    res.send("this is about page")
})
nav.get('/contact',(req,res)=>{
    res.send("this is about page")
})
nav.get("/temp",(req,res)=>{
    res.send([{
        id:1,
        name:"ganesh",
    },
    {
        id:1,
        name:"ganesh",
    },
    {
        id:1,
        name:"ganesh",
    }])

})

nav.listen(5000,()=>{
    console.log("listing to port at 5000")
})

