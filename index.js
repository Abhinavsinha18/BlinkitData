const express = require('express');
const app = express();
const connect = require('./db');
const {FruitModel, FrozenModel, FreshModel, FlowerModel, ExoticModel, ComboModel, FreshvegitableModel} = require('./Model/data.model')
const {OrganicModel} = require('./Model/data.model')
const {LeafModel} = require('./Model/data.model')
const cors = require('cors');

app.use(express.json());
app.use(cors());

const DataInsert = async()=>{
    await FruitModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/kiran-watermelon-tarbuj/prid/369752",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369752a.jpg",
          "tag": "15%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369752a.jpg",
          "title": "Kiran Watermelon (Tarbuj)",
          "weight": "1 piece (1.5 kg - 2.5 kg)",
          "price": "₹150",
          "time": "28",
          "markprice": "₹177"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/shimla-apple/prid/428612",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/428612a.jpg",
          "tag": "13%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/428612a.jpg",
          "title": "Shimla Apple",
          "weight": "4 pieces (500 g - 800 g)",
          "price": "₹78",
          "time": "28",
          "markprice": "₹90"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/kiwi-keevee/prid/394525",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394525a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394525a.jpg",
          "title": "Kiwi (Keevee)",
          "weight": "3 pieces",
          "price": "₹149",
          "time": "28",
          "markprice": "₹178"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sweet-lime-mosambi/prid/364304",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/364304a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/364304a.jpg",
          "title": "Sweet Lime (Mosambi)",
          "weight": "500 g - 700 g",
          "price": "₹88",
          "time": "24",
          "markprice": "₹114"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/green-grapes/prid/347025",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347025a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347025a.jpg",
          "title": "Green Grapes",
          "weight": "500 g",
          "price": "₹178",
          "time": "24",
          "markprice": "₹214"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/brown-coconut-nariyal/prid/4943",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4943a.jpg",
          "tag": "12%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4943a.jpg",
          "title": "Brown Coconut (Nariyal)",
          "weight": "",
          "price": "₹42",
          "time": "12",
          "markprice": "₹48"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/tender-coconut-nariyal-pani/prid/352443",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/352443a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/352443a.jpg",
          "title": "Tender Coconut (Nariyal Pani)",
          "weight": "",
          "time": "13",
          "price": "₹67",
          "markprice": "₹86"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/zespri-green-kiwi/prid/337437",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/337437a.jpg",
          "tag": "21%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/337437a.jpg",
          "title": "Zespri Green Kiwi",
          "weight": "4 pieces",
          "price": "₹230",
          "time": "13",
          "markprice": "₹293"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/indian-pear-nakh/prid/60924",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/60924a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Indian Pear Nakh",
          "weight": "500 g",
          "price": "₹41",
          "time": "14",
          "markprice": "₹51"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/pineapple-ananas/prid/190320",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/190320a.jpg",
          "tag": "14%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Pineapple (Ananas)",
          "weight": "1 piece (800 g - 1000 g)",
          "price": "₹110",
          "time": "15",
          "markprice": "₹129"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sun-melon-sarda/prid/339150",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/339150a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Sun Melon (Sarda)",
          "weight": "1 piece (700 g - 1.2 kg)",
          "price": "₹170",
          "time": "15",
          "markprice": "₹219"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/custard-apple-sitaphal/prid/441909",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/441909a.jpg",
          "tag": "23%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Custard Apple (Sitaphal)",
          "weight": "3 pieces (350 g - 450 g)",
          "price": "₹190",
          "time": "15",
          "markprice": "₹247"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/grapefruit-chakotara/prid/295287",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "IMPORTED",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/295287a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Grapefruit (Chakotara)",
          "weight": "1 piece (200 g - 240 g)",
          "price": "₹161",
          "time": "16",
          "markprice": "₹196"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/kashmiri-apple/prid/439702",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439702a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Kashmiri Apple",
          "weight": "4 pieces (500 g - 700 g)",
          "price": "₹85",
          "time": "13",
          "markprice": "₹106"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/persimmon-ramphal/prid/4006",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4006a.jpg",
          "tag": "12%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Persimmon (Ramphal)",
          "weight": "500 g",
          "price": "₹142",
          "time": "12",
          "markprice": "₹163"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sweet-tamarind-box-imli/prid/3983",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3983a.jpg",
          "tag": "15%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Sweet Tamarind Box (Imli)",
          "weight": "225 g",
          "price": "₹109",
          "time": "17",
          "markprice": "₹129"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/guava/prid/425788",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425788a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425788a.jpg",
          "title": "Guava",
          "weight": "500 g",
          "price": "₹49",
          "time": "18",
          "markprice": "₹61"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/raw-mango-kacha-aam/prid/253144",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/253144a.jpg",
          "tag": "20%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Raw Mango (Kacha Aam)",
          "weight": "500 g - 600 g",
          "price": "₹88",
          "time": "18",
          "markprice": "₹110"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/kinnaur-apple/prid/439701",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439701a.jpg",
          "tag": "20%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Kinnaur Apple",
          "weight": "4 pieces",
          "price": "₹83",
          "time": "19",
          "markprice": "₹104"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/valencia-orange/prid/242283",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/242283a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/fresh-fruits/cid/1487/1503",
          "title": "Valencia Orange",
          "weight": "3 pieces (550 g - 650 g)",
          "price": "₹100",
          "time": "35",
          "markprice": "₹121"
        }
      ]);

   await OrganicModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/ginger-organically-grown-adrak/prid/467652",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467652a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467652a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Ginger - Organically grown (Adrak)",
          "weight": "100 g",
          "price": "₹21",
          "markprice": "₹25",
          "time": "25",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/potato-organically-grown/prid/333427",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/333427a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/333427a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Potato - Organically Grown",
          "weight": "1 kg",
          "price": "₹64",
          "markprice": "₹77",
          "time": "25",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/tomato-organically-grown-tamatar/prid/467659",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467659a.jpg",
          "tag": "12%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467659a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Tomato - Organically grown (Tamatar)",
          "weight": "500 g",
          "price": "₹49",
          "markprice": "₹56",
          "time": "25",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/onion-organically-grown-pyaz/prid/467655",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467655a.jpg",
          "tag": "11%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467655a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Onion - Organically grown (Pyaz)",
          "weight": "500 g",
          "price": "₹30",
          "markprice": "₹34",
          "time": "25",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/green-cucumber-organically-grown-kheera/prid/467649",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467649a.jpg",
          "tag": "15%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467649a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Green Cucumber - Organically grown (Kheera)",
          "weight": "500 g",
          "price": "₹65",
          "markprice": "₹77",
          "time": "23",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/salad-box-hydroponically-grown/prid/450730",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Salad Box - Hydroponically Grown",
          "weight": "1 box",
          "price": "₹110",
          "markprice": "₹136",
          "time": "23",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/garlic-organically-grown-lehsun/prid/467651",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467651a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467651a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Garlic - Organically grown (Lehsun)",
          "weight": "100 g",
          "price": "₹17",
          "markprice": "₹22",
          "time": "23",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/lettuce-box-hydroponically-grown/prid/457285",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/457285a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/457285a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Lettuce Box - Hydroponically Grown",
          "weight": "100 g - 125 g",
          "price": "₹79",
          "markprice": "₹96",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/bok-choy-hydroponically-grown/prid/475848",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/475848a.jpg",
          "tag": "20%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Bok Choy - Hydroponically Grown",
          "weight": "100 g - 125 g",
          "price": "₹110",
          "markprice": "₹138",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/hearty-autumn-leafy-mix-hydroponically-grown/prid/370359",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/370359a.jpg",
          "tag": "",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Hearty Autumn Leafy Mix - Hydroponically Grown",
          "weight": "125 g - 150 g",
          "price": "₹125",
          "markprice": "",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/chilli-organically-grown-mirch/prid/467648",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467648a.jpg",
          "tag": "11%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Chilli - Organically grown (Mirch)",
          "weight": "100 g",
          "price": "₹32",
          "markprice": "₹36",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/spicy-summer-leafy-mix-hydroponically-grown/prid/347551",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347551a.jpg",
          "tag": "",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Spicy Summer Leafy Mix - Hydroponically Grown",
          "weight": "125 g - 150 g",
          "price": "₹125",
          "markprice": "",
          "time": "26",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/king-trumpet-mushroom/prid/476915",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476915a.jpg",
          "tag": "49%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "30 mins",
          "title": "King Trumpet Mushroom",
          "weight": "200 g",
          "price": "₹300",
          "time": "26",
          "markprice": "₹599",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/kale-leaves-mix-hydroponically-grown/prid/467635",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467635a.jpg",
          "tag": "18%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Kale Leaves Mix - Hydroponically Grown",
          "weight": "100 g - 125 g",
          "price": "₹135",
          "markprice": "₹166",
          "time": "27",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/beetroot-organically-grown-chukandar/prid/467637",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467637a.jpg",
          "tag": "14%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Beetroot - Organically grown (Chukandar)",
          "weight": "250 g",
          "price": "₹18",
          "time": "24",
          "markprice": "₹21",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/cabbage-organically-grown-patta-gobhi/prid/467642",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467642a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Cabbage - Organically grown (Patta Gobhi)",
          "weight": "1 piece (300 g - 400 g)",
          "price": "₹81",
          "markprice": "₹104",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/lady-finger-organically-grown-bhindi/prid/467653",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467653a.jpg",
          "tag": "11%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Lady Finger - Organically grown (Bhindi)",
          "weight": "250 g",
          "price": "₹24",
          "markprice": "₹27",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/basil-leaves-hydroponically-grown/prid/467633",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467633a.jpg",
          "tag": "18%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Basil Leaves - Hydroponically Grown",
          "weight": "25 g",
          "price": "₹70",
          "markprice": "₹86",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/rocket-leaves-arugula-hydroponically-grown/prid/475849",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/475849a.jpg",
          "tag": "11%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Rocket leaves/ Arugula - Hydroponically Grown",
          "weight": "40 g - 50 g",
          "price": "₹55",
          "time": "28",
          "markprice": "₹62",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/lemon-organically-grown-nimbu/prid/467654",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467654a.jpg",
          "tag": "18%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/organic-hydroponic/cid/1487/742",
          "etaTag-text 2": "8 mins",
          "title": "Lemon - Organically grown (Nimbu)",
          "weight": "250 g",
          "price": "₹44",
          "markprice": "₹54",
          "time": "30",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        }
      ])
 await LeafModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/coriander-bunch-dhaniya/prid/3889",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "15%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg",
          "title": "Coriander Bunch (Dhaniya)",
          "weight": "100 g",
          "price": "₹50",
          "markprice": "₹59",
          "time": "30",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/basil-leaves/prid/440230",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "21%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440230a.jpg",
          "title": "Basil Leaves",
          "weight": "50 g",
          "price": "₹15",
          "markprice": "₹19",
          "time": "30",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/lettuce-box-hydroponically-grown/prid/457285",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "12%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/457285a.jpg",
          "title": "Lettuce Box - Hydroponically Grown",
          "weight": "100 g - 125 g",
          "price": "₹75",
          "markprice": "₹86",
          "time": "32",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/parsley/prid/443554",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "13%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443554a.jpg",
          "title": "Parsley",
          "weight": "50 g",
          "price": "₹52",
          "markprice": "₹60",
          "time": "35",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/curry-leaves-kadi-patta/prid/17643",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "11%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/17643a.jpg",
          "title": "Curry Leaves (Kadi Patta)",
          "weight": "100 g",
          "price": "₹24",
          "markprice": "₹27",
          "time": "23",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/premium-fresh-mint-leaves-pudina/prid/365431",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "https://cdn.grofers.com/assets/ui/fresh_icon.png",
          "tag": "18%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/365431a.jpg",
          "title": "Premium Fresh Mint Leaves (Pudina)",
          "weight": "100 g",
          "price": "₹70",
          "time": "21",
          "markprice": "₹86",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/papaya-leaves/prid/270201",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "20%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/270201a.jpg",
          "title": "Papaya Leaves",
          "weight": "",
          "price": "₹43",
          "time": "21",
          "markprice": "₹54",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/iceberg-lettuce/prid/443549",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "20%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443549a.jpg",
          "title": "Iceberg Lettuce",
          "weight": "250 g",
          "price": "₹84",
          "time": "21",
          "markprice": "₹106",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/kale-leaves-mix-hydroponically-grown/prid/467635",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "18%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467635a.jpg",
          "title": "Kale Leaves Mix - Hydroponically Grown",
          "weight": "100 g - 125 g",
          "price": "₹135",
          "markprice": "₹166",
          "time": "21",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/green-lettuce/prid/344275",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "23%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/344275a.jpg",
          "title": "Green Lettuce",
          "weight": "200 g - 250 g",
          "price": "₹160",
          "markprice": "₹208",
          "time": "27",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/basil-leaves-hydroponically-grown/prid/467633",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "18%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/467633a.jpg",
          "title": "Basil Leaves - Hydroponically Grown",
          "weight": "25 g",
          "price": "₹70",
          "markprice": "₹86",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/coriander-bunch-green-chilli-combo/prid/486339",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "15%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_486339.jpg",
          "title": "Coriander Bunch + Green Chilli Combo",
          "weight": "Combo of 2",
          "price": "₹64",
          "time": "24",
          "markprice": "₹76",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/rocket-leaves-arugula-hydroponically-grown/prid/475849",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "11%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/475849a.jpg",
          "title": "Rocket leaves/ Arugula - Hydroponically Grown",
          "weight": "40 g - 50 g",
          "price": "₹55",
          "time": "24",
          "markprice": "₹62",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/premium-fresh-coriander-dhaniya/prid/365421",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "18%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/365421a.jpg",
          "title": "Premium Fresh Coriander (Dhaniya)",
          "weight": "100 g",
          "price": "₹81",
          "markprice": "₹99",
          "time": "24",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/mint-leaves-pudina/prid/3914",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "12%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3914a.jpg",
          "title": "Mint Leaves (Pudina)",
          "weight": "200 g",
          "price": "₹54",
          "markprice": "₹62",
          "time": "25",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/herbs-seasoning-combo/prid/487724",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "14%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487724.jpg",
          "title": "Herbs & Seasoning Combo",
          "weight": "Combo of 3",
          "price": "₹120",
          "time": "24",
          "markprice": "₹141",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/fenugreek/prid/438111",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "12%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438111a.jpg",
          "title": "Fenugreek",
          "weight": "250 g",
          "price": "₹42",
          "markprice": "₹48",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/mustard-leaves/prid/174117",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "20%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/174117a.jpg",
          "title": "Mustard Leaves",
          "weight": "500 g",
          "price": "₹31",
          "markprice": "₹39",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/giloy-stick/prid/373657",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "ProductTagstyles__Container-sc-1pmr8q3-0 src": "",
          "tag": "13%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/373657a.jpg",
          "title": "Giloy Stick",
          "weight": "25 g - 35 g",
          "price": "₹33",
          "markprice": "₹38",
          "time": "28",
          "AddToCart__AddButtonText-sc-17ig0e3-4": "",
          "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
        }
      ])

  await FrozenModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/safal-green-peas/prid/28390",
          "tag": "14%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/28390a.jpg?ts=1613137376",
          "etaTag-text 2": "8 mins",
          "title": "Safal Green Peas",
          "weight": "500 g",
          "price": "₹115",
          "time": "36",
          "markprice": "₹135"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/spt-frozen-green-peas/prid/379584",
          "tag": "34%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/379584a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "SPT Frozen Green Peas",
          "weight": "",
          "price": "₹89",
          "time": "28",
          "markprice": "₹135"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/farmland-frozen-green-peas/prid/449124",
          "tag": "34%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/449124a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Farmland Frozen Green Peas",
          "weight": "1 kg",
          "price": "₹158",
          "time": "42",
          "markprice": "₹240"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sakura-edamame-without-pod-frozen-soyabeans/prid/478802",
          "tag": "",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/478802a.jpg",
          "etaTag-text 2": "30 mins",
          "title": "Sakura Edamame Without Pod Frozen Soyabeans",
          "weight": "500 g",
          "price": "₹699",
          "time": "42",
          "markprice": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/godrej-farmiez-frozen-green-peas/prid/490544",
          "tag": "33%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/490544a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Godrej Farmiez Frozen Green Peas",
          "weight": "1 kg",
          "price": "₹159",
          "time": "46",
          "markprice": "₹240"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sakura-edamame-in-the-pod-frozen-soyabeans/prid/478801",
          "tag": "",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/478801a.jpg",
          "etaTag-text 2": "30 mins",
          "title": "Sakura Edamame in The Pod Frozen Soyabeans",
          "weight": "500 g",
          "price": "₹499",
          "time": "47",
          "markprice": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/abbies-shiitake-raw-mushroom/prid/478782",
          "tag": "",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/478782a.jpg",
          "etaTag-text 2": "30 mins",
          "title": "Abbie's Shiitake Raw Mushroom",
          "weight": "100 g",
          "price": "₹375",
          "time": "4",
          "markprice": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/spt-american-frozen-sweet-corn/prid/322036",
          "tag": "47%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/322036a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "SPT American Frozen Sweet Corn",
          "weight": "",
          "price": "₹71",
          "time": "32",
          "markprice": "₹135"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/farmland-frozen-sweet-corn/prid/449125",
          "tag": "30%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/449125a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Farmland Frozen Sweet Corn",
          "weight": "1 kg",
          "time": "35",
          "price": "₹139",
          "markprice": "₹200"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/safal-sweet-corn/prid/28394",
          "tag": "15%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/28394a.jpg?ts=1590670288",
          "etaTag-text 2": "8 mins",
          "title": "Safal Sweet Corn",
          "weight": "500 g",
          "price": "₹85",
          "time": "16",
          "markprice": "₹100"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/spt-frozen-mixed-vegetables/prid/401935",
          "tag": "48%\nOFF",
          "image": "https://cdn.grofers.com/app/images/products/sliding_image/401935a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "SPT Frozen Mixed Vegetables",
          "weight": "500 g",
          "time": "22",
          "price": "₹62",
          "markprice": "₹120"
        }
      ])
  await FreshModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/green-moong-sprouts/prid/445281",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
          "tag": "12%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
          "title": "Green Moong Sprouts",
          "weight": "150 g - 160 g",
          "price": "₹42",
          "time": "22",
          "markprice": "₹48"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/mixed-sprouts/prid/196281",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/196281a.jpg",
          "tag": "13%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/196281a.jpg",
          "title": "Mixed Sprouts",
          "weight": "200 g",
          "price": "₹69",
          "time": "27",
          "markprice": "₹80"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/brown-chana-sprouts/prid/445280",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445280a.jpg",
          "tag": "12%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445280a.jpg",
          "title": "Brown Chana Sprouts",
          "weight": "150 g - 160 g",
          "price": "₹42",
          "time": "27",
          "markprice": "₹48"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/salad-box-hydroponically-grown/prid/450730",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450730a.jpg",
          "title": "Salad Box - Hydroponically Grown",
          "weight": "1 box",
          "price": "₹110",
          "time": "23",
          "markprice": "₹136"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/hearty-autumn-leafy-mix-hydroponically-grown/prid/370359",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/370359a.jpg",
          "tag": "",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/370359a.jpg",
          "title": "Hearty Autumn Leafy Mix - Hydroponically Grown",
          "weight": "125 g - 150 g",
          "price": "₹125",
          "time": "21",
          "markprice": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/spicy-summer-leafy-mix-hydroponically-grown/prid/347551",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347551a.jpg",
          "tag": "",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/347551a.jpg",
          "title": "Spicy Summer Leafy Mix - Hydroponically Grown",
          "weight": "125 g - 150 g",
          "price": "₹125",
          "time": "23",
          "markprice": ""
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/sprouts-combo/prid/487716",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487716.jpg",
          "tag": "13%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487716.jpg",
          "title": "Sprouts Combo",
          "weight": "Combo of 2",
          "price": "₹83",
          "time": "23",
          "markprice": "₹96"
        }
      ])

  await FlowerModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/assorted-pooja-flowers/prid/450376",
          "tag": "12%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450376a.jpg",
          "title": "Assorted Pooja Flowers",
          "weight": "100 g",
          "price": "₹48",
          "time": "17",
          "markprice": "₹55"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flower-string-garland-genda/prid/476877",
          "tag": "15%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476877a.jpg",
          "title": "Orange Marigold Flower String / Garland (Genda)",
          "weight": "",
          "price": "₹69",
          "time": "17",
          "markprice": "₹82"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flowers-genda/prid/476812",
          "tag": "20%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476812a.jpg",
          "title": "Orange Marigold Flowers (Genda)",
          "weight": "100 g",
          "price": "₹48",
          "time": "18",
          "markprice": "₹60"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/rose-flower-petals-gulab/prid/450385",
          "tag": "20%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450385a.jpg",
          "title": "Rose Flower Petals (Gulab)",
          "weight": "100 g",
          "price": "₹48",
          "time": "14",
          "markprice": "₹60"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/yellow-marigold-flowers-genda/prid/476813",
          "tag": "16%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/476813a.jpg",
          "title": "Yellow Marigold Flowers (Genda)",
          "weight": "100 g",
          "price": "₹50",
          "time": "14",
          "markprice": "₹60"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/lotus-flower-kamal/prid/450390",
          "tag": "14%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450390a.jpg",
          "title": "Lotus Flower (Kamal)",
          "weight": "",
          "time": "13",
          "price": "₹63",
          "markprice": "₹74"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/betel-leaves-paan-patta/prid/450391",
          "tag": "13%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/450391a.jpg",
          "title": "Betel Leaves (Paan Patta)",
          "weight": "5 pieces",
          "price": "₹31",
          "time": "13",
          "markprice": "₹36"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/orange-marigold-flowers-yellow-marigold-flowers-combo/prid/495884",
          "tag": "19%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/495884a.jpg",
          "title": "Orange Marigold Flowers + Yellow Marigold Flowers Combo",
          "weight": "100 g + 100 g",
          "price": "₹97",
          "time": "12",
          "markprice": "₹120"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/pooja-combo/prid/496258",
          "tag": "15%\nOFF",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/496258a.jpg",
          "title": "Pooja Combo",
          "weight": "Combo of 3",
          "price": "₹131",
          "time": "12",
          "markprice": "₹155"
        }
      ])
 await ExoticModel.insertMany([
        {
          "product__wrapper href": "https://blinkit.com/prn/broccoli/prid/369742",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
          "tag": "13%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Broccoli",
          "weight": "1 piece (300 g - 400 g)",
          "price": "₹205",
          "time": "11",
          "markprice": "₹237"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/red-capsicum/prid/39394",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39394a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39394a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Red Capsicum",
          "weight": "1 piece (125 g - 175 g)",
          "price": "₹46",
          "time": "11",
          "markprice": "₹57"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/yellow-capsicum/prid/39395",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39395a.jpg",
          "tag": "20%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39395a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Yellow Capsicum",
          "weight": "1 piece (125 g - 175 g)",
          "price": "₹46",
          "time": "15",
          "markprice": "₹58"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/green-zucchini/prid/257199",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/257199a.jpg",
          "tag": "20%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/257199a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Green Zucchini",
          "weight": "1 piece (200 g - 250 g)",
          "price": "₹73",
          "time": "7",
          "markprice": "₹92"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/valencia-orange/prid/242283",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/462106a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/242283a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Valencia Orange",
          "weight": "3 pieces (550 g - 650 g)",
          "price": "₹100",
          "time": "34",
          "markprice": "₹121"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/red-delicious-apple/prid/462106",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/242283a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/462106a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Red Delicious Apple",
          "weight": "4 pieces (450 g - 650 g)",
          "price": "₹248",
          "time": "11",
          "markprice": "₹319"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/blueberry/prid/362127",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/362127a.jpg",
          "tag": "14%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/362127a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Blueberry",
          "weight": "125 g",
          "time": "23",
          "price": "₹300",
          "markprice": "₹351"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/cherry-tomato/prid/440229",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440229a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440229a.jpg",
          "etaTag-text 2": "8 mins",
          "title": "Cherry Tomato",
          "weight": "200 g",
          "price": "₹93",
          "time": "13",
          "markprice": "₹113"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/baby-corn-packet/prid/137816",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/137816a.jpg",
          "tag": "18%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Baby Corn - Packet",
          "weight": "200 g",
          "time": "16",
          "price": "₹40",
          "markprice": "₹49"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/royal-gala-apple/prid/311059",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/311059a.jpg",
          "tag": "13%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Royal Gala Apple",
          "weight": "4 pieces (450 g - 650 g)",
          "price": "₹224",
          "time": "19",
          "markprice": "₹259"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/basil-leaves/prid/440230",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440230a.jpg",
          "tag": "21%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Basil Leaves",
          "weight": "50 g",
          "price": "₹15",
          "time": "13",
          "markprice": "₹19"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/avocado/prid/311058",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/311058a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Avocado",
          "weight": "1 piece (200 g - 300 g)",
          "price": "₹195",
          "time": "15",
          "markprice": "₹234"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/bartlett-pear/prid/465535",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 5 AM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/465535a.jpg",
          "tag": "18%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Bartlett Pear",
          "weight": "4 pieces (500 g - 600 g)",
          "price": "₹111",
          "time": "14",
          "markprice": "₹136"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/dry-gucchi-jumbo-mushroom/prid/327317",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/327317a.jpg",
          "tag": "24%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "30 mins",
          "title": "Dry Gucchi Jumbo Mushroom",
          "weight": "25 g",
          "time": "13",
          "price": "₹900",
          "markprice": "₹1199"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/parsley/prid/443554",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443554a.jpg",
          "tag": "22%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Parsley",
          "weight": "50 g",
          "time": "15",
          "price": "₹28",
          "markprice": "₹36"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/mini-orange/prid/69047",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/69047a.jpg",
          "tag": "17%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Mini Orange",
          "weight": "500 g",
          "time": "16",
          "price": "₹135",
          "markprice": "₹164"
        },
        {
          "product__wrapper href": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/375037a.jpg",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/375037a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "30 mins",
          "title": "Dry Chanterelle Sliced Mushroom",
          "weight": "25 g",
          "price": "₹750",
          "time": "16",
          "markprice": "₹899"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/dry-gucchi-mushroom/prid/3899",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3899a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "30 mins",
          "title": "Dry Gucchi Mushroom",
          "weight": "25 g",
          "price": "₹750",
          "time": "14",
          "markprice": "₹899"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/dry-porcini-sliced-mushroom/prid/184278",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/184278a.jpg",
          "tag": "16%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "30 mins",
          "title": "Dry Porcini Sliced Mushroom",
          "weight": "25 g",
          "price": "₹750",
          "time": "13",
          "markprice": "₹899"
        },
        {
          "product__wrapper href": "https://blinkit.com/prn/green-apple/prid/336515",
          "ProductTagstyles__Container-sc-1pmr8q3-0": "Sourced at 2 PM",
          "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/336515a.jpg",
          "tag": "19%\nOFF",
          "sc-iBkjds src": "https://blinkit.com/cn/exotics/cid/1487/278",
          "etaTag-text 2": "8 mins",
          "title": "Green Apple",
          "weight": "4 pieces (500 g - 700 g)",
          "price": "₹266",
          "time": "12",
          "markprice": "₹332"
        }
      ])
await ComboModel.insertMany([
    {
      "product__wrapper href": "https://blinkit.com/prn/hybrid-tomato-pack-of-2/prid/487714",
      "tag": "22%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487714.jpg",
      "title": "Hybrid Tomato - Pack of 2",
      "weight": "2 x 500 g",
      "price": "₹59",
      "markprice": "₹76",
      "time": "5",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/onion-pack-of-2/prid/487712",
      "tag": "14%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487712.jpg",
      "title": "Onion - Pack of 2",
      "weight": "2 x 1 kg",
      "price": "₹63",
      "markprice": "₹74",
      "time": "14",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/potato-chipsona-pack-of-3/prid/487707",
      "tag": "20%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487707.jpg",
      "title": "Potato (Chipsona) - Pack of 3",
      "weight": "3 x 1 kg",
      "price": "₹86",
      "markprice": "₹108",
      "time": "17",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/yellow-red-capsicum-combo/prid/487715",
      "tag": "21%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487715.jpg",
      "title": "Yellow + Red Capsicum Combo",
      "weight": "Combo of 2",
      "price": "₹100",
      "markprice": "₹127",
      "time": "19",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/mixed-capsicum-combo/prid/487721",
      "tag": "20%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487721.jpg",
      "title": "Mixed Capsicum Combo",
      "weight": "Combo of 3",
      "price": "₹144",
      "markprice": "₹182",
      "time": "13",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/green-capsicum-pack-of-2/prid/488116",
      "tag": "20%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/488116a.jpg",
      "title": "Green Capsicum - Pack of 2",
      "weight": "2 x 250 g - 280 g",
      "price": "₹87",
      "markprice": "₹110",
      "time": "19",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/potato-chipsona-onion-hybrid-tomato-combo/prid/486342",
      "tag": "18%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_486342.jpg",
      "title": "Potato (Chipsona) + Onion + Hybrid Tomato Combo",
      "weight": "Combo of 3",
      "price": "₹90",
      "markprice": "₹111",
      "time": "10",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/sprouts-combo/prid/487716",
      "tag": "13%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487716.jpg",
      "title": "Sprouts Combo",
      "weight": "Combo of 2",
      "price": "₹83",
      "markprice": "₹96",
      "time": "15",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/sweet-sour-smoothie-combo/prid/496929",
      "tag": "18%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/496929a.jpg",
      "title": "Sweet & Sour Smoothie Combo",
      "weight": "4 pieces (500 g - 800 g) + 1 piece (800 g - 1000 g)",
      "price": "₹171",
      "time": "23",
      "markprice": "₹209",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/nimbu-mirchi/prid/339444",
      "tag": "81%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/339444a.jpg",
      "title": "Nimbu Mirchi",
      "weight": "",
      "price": "₹19",
      "markprice": "₹100",
      "time": "43",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/tender-coconut-nariyal-pani/prid/352443",
      "tag": "22%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/352443a.jpg",
      "title": "Tender Coconut (Nariyal Pani)",
      "weight": "",
      "price": "₹67",
      "markprice": "₹86",
      "time": "45",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "ADD",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": ""
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/banana-pack-of-2/prid/488115",
      "tag": "20%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/488115a.jpg",
      "title": "Banana - Pack of 2",
      "weight": "2 x 3 pieces",
      "price": "₹83",
      "markprice": "₹104",
      "time": "39",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/basic-fruits-combo/prid/487723",
      "tag": "15%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487723.jpg",
      "title": "Basic Fruits Combo",
      "weight": "Combo of 3",
      "price": "₹369",
      "markprice": "₹437",
      "time": "32",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/desi-tomato-pack-of-2-desi-tamatar/prid/487713",
      "tag": "16%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487713.jpg",
      "title": "Desi Tomato - Pack of 2 (Desi Tamatar)",
      "weight": "2 x 500 g",
      "price": "₹77",
      "markprice": "₹92",
      "time": "23",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/bananarama-smoothie-combo/prid/489071",
      "tag": "16%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/489071a.jpg",
      "title": "Bananarama smoothie Combo",
      "weight": "Combo of 2",
      "price": "₹338",
      "markprice": "₹403",
      "time": "14",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/salad-vegetables-combo/prid/486343",
      "tag": "22%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_486343.jpg",
      "title": "Salad Vegetables Combo",
      "weight": "Combo of 3",
      "price": "₹379",
      "markprice": "₹486",
      "time": "9",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/french-beans-pack-of-2/prid/488114",
      "tag": "22%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/488114a.jpg",
      "title": "French Beans - Pack of 2",
      "weight": "2 x 250 g",
      "price": "₹101",
      "markprice": "₹130",
      "time": "9",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/melon-combo/prid/486340",
      "tag": "15%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_486340.jpg",
      "title": "Melon Combo",
      "weight": "Combo of 2",
      "price": "₹289",
      "markprice": "₹341",
      "time": "10",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/seasonal-vegetables-combo/prid/487720",
      "tag": "17%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_487720.jpg",
      "title": "Seasonal Vegetables Combo",
      "weight": "Combo of 3",
      "price": "₹128",
      "markprice": "₹156",
      "time": "12",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    },
    {
      "product__wrapper href": "https://blinkit.com/prn/coriander-bunch-green-chilli-combo/prid/486339",
      "tag": "15%\nOFF",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/full_screen/pro_486339.jpg",
      "title": "Coriander Bunch + Green Chilli Combo",
      "weight": "Combo of 2",
      "price": "₹64",
      "markprice": "₹76",
      "time": "19",
      "AddToCart__AddButtonText-sc-17ig0e3-4": "",
      "AddToCart__OutOfStockTag-sc-17ig0e3-2": "Out of Stock"
    }
  ])
  await FreshvegitableModel.insertMany([
    {
      "tag": "23% OFF",
      "para": "🍃Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391306a.jpg",
      "title": "Onion",
      "time": 5,
      "weight": "1kg",
      "price": "₹30",
      "markprice": "₹39"
    },
    {
      "tag": "18% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/333785a.jpg",
      "title": "Potato (Chipsona) (Aloo)",
      "time": 2,
      "weight": "1kg",
      "price": "₹30",
      "markprice": "₹37"
    },
    {
      "tag": "14% OFF",
      "para": "🍃Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3881a.jpg",
      "title": "Hybrid Tomato (Tamatar)",
      "time": 40,
      "weight": "500g",
      "price": "₹30",
      "markprice": "₹35"
    },
    {
      "tag": "15% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423735a.jpg",
      "title": "Green Chilli (Hari Mirch)",
      "time": 50,
      "weight": "100g",
      "price": "₹17",
      "markprice": "₹20"
    },
    {
      "tag": "17% OFF",
      "para": "🍃Sourced at 2 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
      "title": "Green Capsicum (Shimla Mirch)",
      "time": 10,
      "weight": "250g - 280g",
      "price": "₹75",
      "markprice": "₹91"
    },
    {
      "tag": "20% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10088a.jpg",
      "title": "Cucumber (Kheera)",
      "time": 42,
      "weight": "500g - 700g",
      "price": "₹49",
      "markprice": "₹62"
    },
    {
      "tag": "10% OFF",
      "para": "🍃Sourced at 5 AM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421703a.jpg",
      "title": "Ginger (Adrak)",
      "time": 11,
      "weight": "250g",
      "price": "₹32",
      "markprice": "₹40"
    },
    {
      "tag": "13% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/17748a.jpg",
      "title": "Lemon (Nimbu)",
      "time": 8,
      "weight": "6 pieces (150 g - 220 g)",
      "price": "₹25",
      "markprice": "₹29"
    },
    {
      "tag": "18% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3913a.jpg",
      "title": "Orange Carrot (Gajar)",
      "time": 20,
      "weight": "200g - 250g",
      "price": "₹26",
      "markprice": "₹32"
    },
    {
      "tag": "18% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445675a.jpg",
      "title": "Desi Tomato (Desi Tamatar)",
      "time": 15,
      "weight": "500g",
      "price": "₹41",
      "markprice": "₹50"
    },
    {
      "tag": "17% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440229a.jpg",
      "title": "Cherry Tomato",
      "time": 40,
      "weight": "200g",
      "price": "₹93",
      "markprice": "₹113"
    },
    {
      "tag": "22% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg",
      "title": "Coriander Bunch (Dhaniya)",
      "time": 25,
      "weight": "100g",
      "price": "₹45",
      "markprice": "₹58"
    },
    {
      "tag": "21% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3898a.jpg",
      "title": "Lady Finger (Bhindi)",
      "time": 45,
      "weight": "250g",
      "price": "₹15",
      "markprice": "₹19"
    },
    {
      "tag": "13% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39394a.jpg",
      "title": "Red Capsicum",
      "time": 15,
      "weight": "1 piece (125 g - 175 g)",
      "price": "₹56",
      "markprice": "₹65"
    },
    {
      "tag": "16% OFF",
      "para": "🍃Sourced at 2 PM",
      "image": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39395a.jpg",
      "title": "Yellow Capsicum",
      "time": 15,
      "weight": "1 piece (125 g - 175 g)",
      "price": "₹56",
      "markprice": "₹67"
    }
  ])


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




app.listen(4000,async function(){
    try {
        await connect;
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
    console.log("Lisining");
})