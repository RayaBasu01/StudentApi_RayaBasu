const mongoose =require("mongoose");

const connDb=(uri)=>{
    console.log("DataBase connected");
    return mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    });
};


module.exports= connDb;
