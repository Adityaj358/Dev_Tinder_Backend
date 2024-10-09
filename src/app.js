const express = require("express");

const app = express();



app.get("/user", (req,res)=> {
    res.send({
        firstname : "Aditya",
        lastname : "Jiwane"
    });
})

app.post("/user",(req,res) => {
    console.log("save data to database");
    res.send("Data saved succesfully to db");
})


app.use("/test" , (req,res) => {
    res.send("Hello from the Test");
});

app.delete("/user", (req,res) => {
    res.send("data successfully delete from db");
})

app.listen(3000, () => {
    console.log("Server is running successfully on port 3000....");
});
