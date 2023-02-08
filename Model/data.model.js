const mongoose = require('mongoose');

const fruitsSchema = mongoose.Schema({
    product__wrapper :String,
    ProductTagstyles : String,
    image : String,
    tag : String,
    sciBkjds : String,
    title : String,
    weight : String,
    price : String,
    time :String,
    markprice : String,
    AddToCart: String,
    AddToCart__OutOfStockTag: ""
})




const FruitModel = mongoose.model('fruits', fruitsSchema);
const OrganicModel = mongoose.model('organic', fruitsSchema);

module.exports ={
    FruitModel,
    OrganicModel
}