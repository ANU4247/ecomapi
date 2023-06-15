const dotenv = require("dotenv");
dotenv.config()
let express = require('express');
let app = express();
const PORT = process.env.PORT||5002;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbConnect,getData,postData,updateOrder,deleteOrder} = require('./controller/dbController')

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.get('/',(req,res) => {
    res.send('Hiii From express')
})


// get all categories
app.get('/categories',async (req,res)=>{
    let query = {};
    let collection = "categories"
    let output = await getData(collection,query);
    res.send(output)
})

// get all brands
app.get('/brands',async (req,res)=>{
    let query = {};
    let collection = "brands"
    let output = await getData(collection,query);
    res.send(output)
})

// get all products
app.get('/products',async (req,res)=>{
    let query = {};
    let collection = "products"
    let output = await getData(collection,query);
    res.send(output)
})

// get all users
app.get('/users',async (req,res)=>{
    let query = {};
    let collection = "users"
    let output = await getData(collection,query);
    res.send(output)
})

// get all cart
app.get('/cart',async (req,res)=>{
    let query = {};
    let collection = "cart"
    let output = await getData(collection,query);
    res.send(output)
})

// get all orders
app.get('/orders',async (req,res)=>{
    let query = {};
    let collection = "orders"
    let output = await getData(collection,query);
    res.send(output)
})


// Start the server
app.listen(PORT, () => {
    dbConnect()
  console.log(`Server is running on port ${PORT}`);
})
