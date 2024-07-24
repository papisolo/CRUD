"use strict"
const express = require("express");
const sql = require("mysql")
const router = express.Router();


const about = {title:"name", age:32, status:"married" }
const {title,age,status} = about

router.get("/" , (req , res) =>{
    res.render("login")
   
})

router.get("/about", (req,res,next)=>{
    res.render('index', {data:"The most happy day of my life", title:"Express"})

})

router.get('/html' , (req, res) => { 
    let html = " "
    html += "<h6>"
    html += "<h1> welcome to our first page </h1>"
    html += "</h6>"
    res.send(html)
})

router.post("/about", (req,res,next)=>{
    res.send(about)

})


module.exports = router