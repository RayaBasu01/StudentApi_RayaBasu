const student= require("../models/schema");


const getAllStudents = async(req,res)=>{

    const {department, fname,lname, roll } =req.query;
    const queryObj={};

    if(department){
        queryObj.department=department;
    }
    if(fname){
        queryObj.fname={ $regex :fname , $options: "i"};  //options : i [not case sensitive]
    }
    if(lname){
        queryObj.lname={ $regex :lname , $options: "i"};
    }
    if(roll){
        queryObj.roll=roll;
    }

    let data=student.find(queryObj).sort("roll");   //for getting all data from database

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) ||10;

    let skip = (page -  1 )*limit;

    data=data.skip(skip).limit(limit);


    const StudentData= await data; 
    console.log(req.query);
    res.status(200).json({StudentData})

};


const getAllStudentsTesting = async(req,res)=>{

    const {department, fname,lname, roll } =req.query;
    const queryObj={};

    if(department){
        queryObj.department=department;
    }
    if(fname){
        queryObj.fname={ $regex :fname , $options: "i"};  //options : i [not case sensitive]
    }
    if(lname){
        queryObj.lname={ $regex :lname , $options: "i"};
    }
    if(roll){
        queryObj.roll=roll;
    }

    let data=student.find(queryObj).sort("roll");   //for getting all data from database

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) ||10;

    let skip = (page -  1 )*limit;

    data=data.skip(skip).limit(limit);


    const StudentData= await data; 
    console.log(req.query);
    res.status(200).json({StudentData})
};

module.exports ={getAllStudents, getAllStudentsTesting}