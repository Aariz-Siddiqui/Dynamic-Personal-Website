const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("../database/conn")
const userdata = require("../database/userdata")
//setting path
const staticPath = path.join(__dirname,"../public");
const viewPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
//middleware
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.static(staticPath))
app.set("view engine" , "hbs");
app.set("views",viewPath);
hbs.registerPartials(partialsPath);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//routing
app.get("/",(req,res)=>{
    res.status(201).render("index");
})
app.post("/contact",async(req,res)=>{
    try{
        const newuser = new userdata({
            name:req.body.name,
            contact:req.body.contact,
            email:req.body.email,
            message:req.body.message
        }
        )
        const adduser = await newuser.save();
        res.status(201).render("index");
    }catch(error){
        res.status(500).send(error);
    }

})
app.listen(8000,()=>{
    console.log("listening to port")
})
