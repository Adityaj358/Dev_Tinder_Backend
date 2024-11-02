const express = require("express");
const connectDb = require("./config/db")
const app = express();
const User = require("./models/user")

app.post("/signup", async (req,res) =>{
  const user = new User({
    firstName : "Adi",
    lastName : "Jiwane",
    email : "adityajiwane18@gmail.com",
    password : "Aditya@123"
  });

  try{
    await user.save();
    res.send("User added Seuccesfully")
  }catch(err){
    res.status(400).send("Error saving users:" + err.message)
  } 
});


connectDb().then( () => {
  console.log("Database Connection Established...");
  app.listen(3000, () => {
    console.log("Server is running successfully on port 3000....");
  });
}).catch((err) => {
  console.error("Database cannot be connected!!")
}); 


