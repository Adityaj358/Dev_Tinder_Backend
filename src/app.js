const express = require("express");

const app = express();


app.get("/user/:userId/:name/:password", (req,res)=> {
    console.log(req.params);
    res.send({
        firstname : "Aditya",
        lastname : "Jiwane"
    });
})



app.listen(3000, () => {
    console.log("Server is running successfully on port 3000....");
});
