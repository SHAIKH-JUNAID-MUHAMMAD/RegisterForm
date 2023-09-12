const express = require('express');
const app = express();
const port= process.env.PORT || 2000;
const mongoose = require('mongoose')
const registrationapi = require("./routes/Registration")

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use("/register",registrationapi);





mongoose.connect('mongodb+srv://sjm231204:ENafdBkN9vkWZeD2@pos-cluster.9ntlfxa.mongodb.net/RegisterStudents?retryWrites=true&w=majority').then((res)=>{
    console.log("Database is Connected!")
}).catch((err)=>{
    console.log(err.message)
})

app.get("/feed", (req,res)=>{
    res.render('Registationform')
})


app.listen(port , ()=>{
    console.log(`Server is running.....`)
})