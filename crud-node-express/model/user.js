// create Mongoose Model

const  mongoose = require('mongoose');

const  userSchema =  new mongoose.Schema({
    name :{
        type : String,
        unique : true
    }
});

module.exports =  new mongoose.model('todo',userSchema);