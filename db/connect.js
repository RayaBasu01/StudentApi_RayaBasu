const mongoose =require("mongoose");
// uri = "mongodb+srv://*********@kinarastudentapi.26t7kep.mongodb.net/KinaraStudentApi?retryWrites=true&w=majority" ;


const connDb=(uri)=>{
    console.log("DataBase connected");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    });
};


module.exports= connDb;