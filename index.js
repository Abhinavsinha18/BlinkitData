const express = require('express');
const app = express();
const connect = require('./db');
// const connected =require('./db')
const {FruitModel, FrozenModel, FreshModel, FlowerModel, ExoticModel, ComboModel, FreshvegitableModel, ProductsAllwithDetailsModel} = require('./Model/data.model')
const {OrganicModel} = require('./Model/data.model')
const {LeafModel} = require('./Model/data.model')
const cors = require('cors');
const { user } = require('./Route/user.route');

app.use(express.json());
app.use(cors());
app.use('/',user)
const DataInsert = async()=>{


}

DataInsert();

app.get('/', async(req,res)=>{
    
 
    res.send("Welcome Here" );
})


app.get('/fruits',async (req,res)=>{
    let data = await FruitModel.find();
 res.send(data)
})


app.get('/organic',async (req,res)=>{
    let data = await OrganicModel.find();
 res.send( data)
})

app.get('/leafs',async (req,res)=>{
    let data = await LeafModel.find();
 res.send( data)
})

app.get('/frozen',async (req,res)=>{
    let data = await FrozenModel.find();
 res.send( data)
})

app.get('/fresh',async (req,res)=>{
    let data = await FreshModel.find();
 res.send( data)
})
app.get('/flower',async (req,res)=>{
    let data = await FlowerModel.find();
 res.send( data)
})
app.get('/exotic',async (req,res)=>{
    let data = await ExoticModel.find();
 res.send( data)
})
app.get('/combo',async (req,res)=>{
    let data = await ComboModel.find();
 res.send( data)
})
app.get('/Freshvegitable',async (req,res)=>{
    let data = await FreshvegitableModel.find();
 res.send( data)
})
app.get('/productsAllwithDetails',async (req,res)=>{
    let data = await ProductsAllwithDetailsModel.find();
 res.send( data)
})




app.listen(4040,async function(){
    try {
        await connect;  
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
    console.log("Lisining");
})