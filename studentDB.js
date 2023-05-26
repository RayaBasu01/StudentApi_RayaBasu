require("dotenv").config();

const connDb= require("./db/connect");

const student = require("./models/schema");

const studentJSON =require("./student.json")

start=async()=>{
    try {
        await connDb(process.env.MONGODB_URI);
        await student.deleteMany();
        await student.create(studentJSON); //passing the json file with create method
        console.log("Successfully Data Created");

    } catch (error) {
        console.log(error);
    }
}

start()