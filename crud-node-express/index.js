const express = require('express');
const bodyParser = require('body-parser');
const dbconfig = require('./config/database.config.js')
const mongoose= require('mongoose')
const UserRoute =require('./routers/user.js')
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({extended :true}))

app.use(bodyParser.json())



const corsOptions = {
    origin: "*",
    credentials: true,
    exposedHeaders: ["set-cookie"],
    methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
    maxAge: 172800,
    allowedHeaders: "Origin,Content-Type,Authorization,Access-Control-Allow-Methods,Content-Type",
    preflightContinue: false,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));


mongoose.connect('mongodb+srv://manojkumarmanusam:o4Wz9iCAVyNghTxs@cluster0.gfqon8t.mongodb.net/todoCollection').then(()=>{
    console.log("Sucess");
}).catch(()=>{
    console.log("failed");
})

  
app.use('/api/user',UserRoute)
//app.use('/api/adduser',UserRoute)
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({"message": "Hello "});
})

app.listen(4000,()=>{
    console.log("server is Listening on 4000");
})





