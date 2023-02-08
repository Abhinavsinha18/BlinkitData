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
const LeafModel = mongoose.model('leafs', fruitsSchema);
const FrozenModel = mongoose.model('frozen', fruitsSchema);
const FreshModel = mongoose.model('fresh', fruitsSchema);
const FlowerModel = mongoose.model('flower', fruitsSchema);
const ExoticModel = mongoose.model('exotic', fruitsSchema);
const ComboModel = mongoose.model('combo', fruitsSchema);
const FreshvegitableModel = mongoose.model('Freshvegitable', fruitsSchema);
const ProductsAllwithDetailsModel = mongoose.model('productsAllwithDetails', fruitsSchema);

module.exports ={
    FruitModel,
    OrganicModel,
    LeafModel,
    FrozenModel,
    FreshModel,
    FlowerModel,
    ExoticModel,
    ComboModel,
    FreshvegitableModel,
    ProductsAllwithDetailsModel
}