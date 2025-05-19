const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.connect(`${process.env.CONNECTION_STRING}` ).then(()=>{
            console.log("mongodb connected");
        }).catch((error)=> {
            console.error("error conecting db", error);
        })
    }catch (err){
        console.log(err)
    }
}

module.exports = connectDB;