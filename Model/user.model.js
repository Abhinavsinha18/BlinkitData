const mongoose = require('mongoose');

const userScehma = mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const UserModel = mongoose.model('users',userScehma);


module.exports = {
    UserModel
}