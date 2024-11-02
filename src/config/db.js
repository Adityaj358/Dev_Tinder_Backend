const mongoose = require("mongoose");

const connectDb = async () =>{
    await mongoose.connect("mongodb+srv://adityajiwane182000:e1CmkK97BECKf6TU@cluster0.ut2wj.mongodb.net/");
};

module.exports = connectDb;

