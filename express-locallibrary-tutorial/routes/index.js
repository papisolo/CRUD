var express = require('express');
var router = express.Router();
var dbService = require('../dbService')
var sql = require("mysql")
require("dotenv").config()

const connection = sql.createConnection({
  host: process.env.DB_Host,
  database: process.env.DB_Name,
  user: process.env.DB_User,
  port: process.env.DB_Port,
  host: process.env.DB_Host,
  password: process.env.DB_Password
})
const connect = connection.connect((err) => {
  if (err) console.log(err)
  console.log("database running")
})


/*GET home page.*/
router.get('/', async (req, res) => {
  /*try{ const response = await new Promise( (resolve, reject) => {
     connection.query("SELECT * FROM User", (err,results)=> {
       if(err){reject(err)};
       resolve(results);
     })

}).then(data =>res.render("index", {data} ))
.catch(err => console.log(err))}

catch(err){console.log(err)}*/
  res.send("Error Handling")


});

/*
router.post('/search',  async (req, res) => { 
  const search = req.body.search
  const response = await  new Promise((resolve, reject) => {
    const getQuery = connection.query("SELECT * FROM USER WHERE First_Name LIKE ? OR Email LIKE ? OR Last_Name LIKE ?", ["%" + search + "%","%" + search + "%","%" + search + "%" ] , (err, results) =>
    {if (err) {reject(err);}
    resolve(results)})
  }).then(data => res.render("index", {data}))
  .catch(err => console.log(err))
 
 
});

router.get('/user', async (req, res)=>{
  res.render("user")
  

  
});




router.post('/user', async (req, res)=>{
  const {First_Name, Last_Name, Email, Phone_Number } =  req.body
  const response = await  new Promise((resolve, reject) => {
    const getQuery = connection.query("INSERT INTO USER SET First_Name = ?, Last_Name = ? , Email = ?, Phone_Number = ? ", [First_Name, Last_Name, Email, Phone_Number ], (err, results) =>
    {if (err) {reject(err);}
    resolve(results)})
  }).then(data => res.render("user", {data}))
  .catch(err => console.log(err))
 
 
});


router.get("/edit/:id/:name", async (req, res) => { 
  const {id, name} = req.params
  const response = await  new Promise((resolve, reject) => {
    const getQuery = connection.query("SELECT * FROM USER WHERE id = ? ", [id] , (err, results) =>
    {if (err) {reject(err);}
    resolve(results)})
  }).then(data => res.render("edit", {data}))
  .catch(err => console.log(err))
  console.log(req.params)
});

router.post("/edit/:id" , async (req, res) => { 
  const {First_Name, Last_Name, Email, Phone_Number } =  req.body
  const search = req.params.id
  const response = await  new Promise((resolve, reject) => {
    const getQuery = connection.query("UPDATE USER SET First_Name = ?, Last_Name = ? , Email = ?, Phone Number,  WHERE id = ?,  ", [First_Name,Last_Name, Email, Phone_Number, search] , (err, results) =>
    {if (err) {reject(err);}
    resolve(results)})
  }).then(data => res.render("edit", {data}))
  .catch(err => console.log(err))
});


//can only  be handled with an api



router.get('/login', async (req, res)=>{
  res.render("login")
})

router.post('/login/post', async (req, res) => {
  try{ const {Email, Password} = req.body
  const response = await  new Promise((resolve, reject)=> {
connection.query("SELECT * FROM USER WHERE EMAIL LIKE ? AND PHONE_NUMBER LIKE ? " , ["%" + search + "%", "%" + search + "%"], (err, results)=>{
  if(err)reject(err)
  resolve(results)
})
  }).then(data => console.log(data))
  .catch(err => console.log(err))
  }
  catch(err) { console.log(err)}  //We use promise to handle and return data
});


  router.get('/:id',  async (req, res) => { 
    const {id} = req.params
  
    const response = await  new Promise((resolve, reject) => {
      const getQuery = connection.query("DELETE  FROM USER WHERE id = ?  ",  [id]  , (err, results) =>
      {if (err) {reject(err);}
      resolve(results)})

    }).then(data => res.redirect('/'))
    .catch(err => console.log(err))
   
   
  });


  
  */
module.exports = router