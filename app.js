const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080 ;
const connDb=require("./db/connect");
require("dotenv").config();


const students_routes = require("./routes/students")

app.get("/", (req,res)=>{
    res.send("HEllo world");
})


//Setting the router

app.use("/api/students" , students_routes);

const start = async()=>{
    try {
        await connDb(process.env.MONGODB_URI);
        app.listen(PORT, ()=>{
            console.log(`${PORT} is Live.`);
        })
    } catch (error) {
        console.log(error)
    }
}
start();