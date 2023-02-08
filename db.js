const mongoose =require('mongoose');

const connect = mongoose.connect('mongodb+srv://abhinav:abhinav@cluster0.lusvoxm.mongodb.net/blinkit?retryWrites=true&w=majority')



module.exports={
    connect
}