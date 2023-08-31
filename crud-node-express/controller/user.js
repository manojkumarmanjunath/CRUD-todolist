// creating CRUD functions

const UserModel = require('../model/user')


// Create and Save a new user
exports.create = async (req, res) => {
    console.log("aaaaa post api aaaaaaaaaaaaa=========================================" ,req.body)
    if (!req.body.name) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const userData = new UserModel({
        name: req.body.name,
    });
    console.log("use model",userData)
    
    await userData.save().then(data => {
        console.log("response :",data)
        res.send({
            message:"User created successfully!!",
            user:data
        });
    }).catch(err => {
        console.log("error :",err)
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
    try {
        const user = await UserModel.find();
        console.log("user ",user )
        res.status(200).json(user);
    } catch(error) {
        console.log("error ,")
        res.status(404).json({message: error.message});
    }
};

