var mysql = require("mysql")
var dotenv = require("dotenv")
dotenv.config()

const config = {
    host: process.env.DB_Host,
    database: process.env.DB_Name,
    user: process.env.DB_User,
    port: process.env.DB_Port,
    host: process.env.DB_Host,
    password: process.env.DB_Password
}


const connection = mysql.createConnection(config)
const connect = connection.connect((err) => {
    if (err) { console.log(err) }
    console.log('connected to our database')

})


async function offLoadData() {
    try {
        const response = await new Promise((resolve, reject) => {
            connection.query("SELECT * FROM USERS WHERE name  = 'solomon' ", (err, results) => {
                if (err) reject(err)
                resolve(results)
            })


        })



    }
    catch (err) {
        console.log(err);
    }


}

async function insertNew({ id, First_Name, Last_Name, Email, Phone_Number }) {
    try {
        const response = await new Promise((resolve, reject) => {
            connection.query("INSERT INTO USER (id, First_Name, Last_Name ,Email, Phone_Number) VALUES (?,?,?,?,?); ", [id, First_Name, Last_Name, Email, Phone_Number], (err, results) => {
                if (err) { reject(err); }
                resolve(results)
            })
        })

        return [{
            id: id,
            name: First_Name,
            surname: Last_Name,
            Email: Email,
            PhoneNumber: Phone_Number
        }]
    }
    catch (err) { console.log(err) }
}

async function deleteRow(id) {


    try {
        id = parseInt(id, 10)
        const response = await new Promise((resolve, reject) => {
            connection.query("DELETE  FROM USERS WHERE ID = id ", (err, results) => {
                if (err) { reject(err) }
                resolve(results.affectedRows)
            })
        })

        return response >= 1 ? true : false  //We are returning a promise
    }
    catch (err) {
        console.log(err)
        return false
    }

    
}


module.exports = {
    offLoadData: offLoadData,
    insertNew: insertNew,
    deleteRow: deleteRow
}