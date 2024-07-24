const mongoose = require("mongoose")
var dotenv = require("dotenv")
dotenv.config()




mongoose.connect(proess.env.DB_URL, () => console.log("connected to database"))


module.export = {
    getPOst: () => { return mongoose.models("post", schema) },
    getUsers: () => { }
};