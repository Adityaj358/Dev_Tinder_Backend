const express = require("express");
const connectDb = require("./config/db")
const app = express();
const User = require("./models/user")
app.use(express.json());

app.post("/signup", async (req,res) =>{

  const user = new User(req.body);

  try{
    await user.save();
    res.send("User added Seuccesfully")
  }catch(err){
    res.status(400).send("Error saving users:" + err.message)
  } 
});

// api to  get by email id
app.get("/user",async (req,res) =>{
  const userEmail = req.body.email

  try {
    const users = await User.findOne({email:userEmail})
    if(!users){ 
      res.status(404).send("User not found")
    }else{
      res.send(users)
    }
   
  } catch (error) {
    res.status(404).send("Something went wrong")
  }
})

// app.delete("/user",async(req,res) => {
//   const userId = req.body.User
//   try {
//     const user = await user.findByIdAndDelete(email)
//   } catch (err) {
//     res.status(400).send("Something went wrong")
//   }
// })

app.patch("/user",async (req,res)=>{
  const userId = req.body.userId
  const data = req.body;

  
  try {

    const ALLOWED_UPDATES = ["userID","photoUrl","about","gender","age","skills"];

  const isAllowUpdates = Object.keys(data).every((k) => {
    ALLOWED_UPDATES.includes(k)
  })

  if(!isAllowUpdates){
    throw new Error("Update not allowed")
  }

  if(data.skills.length  > 10){
    throw new Error("Skills cannot be more than 10")
  }

    const user = await User.findByIdAndUpdate({_id:userId},data,{
      returnDocument: "after",
      runValidator: true, 
    });
    res.send("User update Succesfully")
  } catch (error) {
    res.status(400).send("UPDATE FAILED"+ error.message)
  }
})

connectDb().then( () => {
  console.log("Database Connection Established...");
  app.listen(3000, () => {
    console.log("Server is running successfully on port 3000....");
  });
}).catch((err) => {
  console.error("Database cannot be connected!!")
}); 


