const express= require('express')
const UserController = require('../controller/user')
const router = express.Router();

router.get('/',UserController.findAll);
router.post('/',UserController.create)

module.exports =router



