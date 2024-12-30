const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aariz:kinged20@cluster0.nnzafvq.mongodb.net/pwd?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connection sucessful")})
.catch((error)=>{console.log(error)});
