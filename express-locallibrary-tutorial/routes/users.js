var express = require('express');
var router = express.Router();
var dbService = require('../dbService')
var sql = require("mysql")
require("dotenv").config()

const connection = sql.createConnection({host :process.env.DB_Host,
  database :process.env.DB_Name,
  user: process.env.DB_User,
  port : process.env.DB_Port,
  host : process.env.DB_Host })
  const connect = connection.connect((err) => {
    if(err) console.log(err)
    console.log("database running")
  })


/*GET home page. */



router.get('/',  async (req, res) => { 
  
  /*const response = await  new Promise((resolve, reject) => {
    const getQuery = connection.query("SELECT * FROM USER  "  , (err, results) =>
    {if (err) {reject(err);}
    resolve(results)})
  }).then(data => res.status(200).send(data))
  .catch(err => console.log(err))
  res.render("user")*/
});





//check if we can send a response back to the browser using res.send(req.body)
router.post('/post', function(req, res, next) {
 const dbs =  dbService.insertNew(req.body)
 .then(data => res.json(data))
 .catch(err => console.log(err))
 
});


router.get("/api",  function(req, res, next)  { 
 const db = dbService.offLoadData()
 .then(data => res.send(data))
 .catch(err => console.log(err)) 
})
 

router.delete('/delete/:id', (req,res) => {
  const db = dbService.deleteRow(req.params) 
  .then(data => res.json({ success : data} ))
  .catch(err => console.log(err))
  
  })
  

  router.get('/retrieve/:name',  async (req, res) => { 
    const {name} = req.params
    const response = await  new Promise((resolve, reject) => {
      const getQuery = connection.query("SELECT * FROM USER WHERE First_Name = ? OR Last_Name = ? ",  [name, name]  , (err, results) =>
      {if (err) {reject(err);}
      resolve(results)})
    }).then(data => res.send(data))
    .catch(err => console.log(err))
   
  });



  module.exports = router
