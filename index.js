const express = require('express');
const app = express();
const connect = require('./db');
const {FruitModel} = require('./Model/data.model')
const {OrganicModel} = require('./Model/data.model')

app.use(express.json());


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



app.listen(4000,async function(){
    try {
        await connect;
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
    console.log("Lisining");
})