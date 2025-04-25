const express = require("express") // dùng thư viện express
const app = express()
const Product = require("../modals/ProductModal")
const { multipleMongooseToObject, singleMongooseToOject } = require("../ulti/convertMongoose")

const productsList = [
    { name: "Apple", image: "https://example.com/apple.jpg", price: 200 },
    { name: "Banana", image: "https://example.com/banana.jpg", price: 150 },
    { name: "Orange", image: "https://example.com/orange.jpg", price: 300 },
    { name: "Pineapple", image: "https://example.com/pineapple.jpg", price: 500 },
    { name: "Broccoli", image: "https://example.com/broccoli.jpg", price: 100 },
    { name: "Carrot", image: "https://example.com/carrot.jpg", price: 120 },
    { name: "Potato", image: "https://example.com/potato.jpg", price: 80 },
    { name: "Tomato", image: "https://example.com/tomato.jpg", price: 90 },
    { name: "Chicken Breast", image: "https://example.com/chicken_breast.jpg", price: 250 },
    { name: "Salmon", image: "https://example.com/salmon.jpg", price: 600 },
    { name: "Beef Steak", image: "https://example.com/beef_steak.jpg", price: 750 },
    { name: "Pork Belly", image: "https://example.com/pork_belly.jpg", price: 400 },
    { name: "Lettuce", image: "https://example.com/lettuce.jpg", price: 50 },
    { name: "Spinach", image: "https://example.com/spinach.jpg", price: 60 },
    { name: "Cabbage", image: "https://example.com/cabbage.jpg", price: 70 },
    { name: "Eggplant", image: "https://example.com/eggplant.jpg", price: 100 },
    { name: "Zucchini", image: "https://example.com/zucchini.jpg", price: 90 },
    { name: "Strawberry", image: "https://example.com/strawberry.jpg", price: 300 },
    { name: "Blueberry", image: "https://example.com/blueberry.jpg", price: 350 },
    { name: "Watermelon", image: "https://example.com/watermelon.jpg", price: 400 },
    { name: "Mango", image: "https://example.com/mango.jpg", price: 450 },
    { name: "Grapes", image: "https://example.com/grapes.jpg", price: 200 },
    { name: "Avocado", image: "https://example.com/avocado.jpg", price: 300 },
    { name: "Shrimp", image: "https://example.com/shrimp.jpg", price: 550 },
    { name: "Crab", image: "https://example.com/crab.jpg", price: 700 },
    { name: "Tuna", image: "https://example.com/tuna.jpg", price: 800 },
    { name: "Lamb Chop", image: "https://example.com/lamb_chop.jpg", price: 900 },
    { name: "Pomegranate", image: "https://example.com/pomegranate.jpg", price: 350 },
    { name: "Kiwi", image: "https://example.com/kiwi.jpg", price: 250 },
    { name: "Dragon Fruit", image: "https://example.com/dragon_fruit.jpg", price: 500 },
    { name: "Pear", image: "https://example.com/pear.jpg", price: 150 },
    { name: "Peach", image: "https://example.com/peach.jpg", price: 200 },
    { name: "Plum", image: "https://example.com/plum.jpg", price: 220 },
    { name: "Cherry", image: "https://example.com/cherry.jpg", price: 600 },
    { name: "Coconut", image: "https://example.com/coconut.jpg", price: 450 },
    { name: "Bok Choy", image: "https://example.com/bok_choy.jpg", price: 70 },
    { name: "Pumpkin", image: "https://example.com/pumpkin.jpg", price: 120 },
    { name: "Sweet Corn", image: "https://example.com/sweet_corn.jpg", price: 140 },
    { name: "Garlic", image: "https://example.com/garlic.jpg", price: 60 },
    { name: "Onion", image: "https://example.com/onion.jpg", price: 50 },
    { name: "Cucumber", image: "https://example.com/cucumber.jpg", price: 100 },
    { name: "Bell Pepper", image: "https://example.com/bell_pepper.jpg", price: 90 },
    { name: "Ginger", image: "https://example.com/ginger.jpg", price: 80 },
    { name: "Papaya", image: "https://example.com/papaya.jpg", price: 300 },
    { name: "Cantaloupe", image: "https://example.com/cantaloupe.jpg", price: 320 },
    { name: "Raspberry", image: "https://example.com/raspberry.jpg", price: 400 },
    { name: "Honeydew", image: "https://example.com/honeydew.jpg", price: 350 },
    { name: "Persimmon", image: "https://example.com/persimmon.jpg", price: 280 }
];
class ProductController {
    // [GET]        /products/api/get
    index = (req, res, next) => {
        Product.find({})
            .then(product => res.json(product))
            .catch(next)
    }

    // [POST]       /post/products
    add = (req, res, next) => {

        let col = new Product({
            name: req.query.name,
            img: req.query.img,
            price: req.query.price
        })
        col.save()
            .then(() => res.json({ status: "ok" }))
            .catch(next)
    }

    // [GET]        /products/api/find
    find = (req, res, next) => {
        Product.find({})
            .then(prod => {
                let key = req.query.name.toLowerCase().trim()
                let type = req.query.type.toLowerCase().trim()
                let data = prod.filter(product => product.name.trim().toLowerCase().startsWith(key))
                if (type === "less") {
                    let newData = []
                    for (let i = 0; i < 7; i++) {
                        if (data[i] !== undefined) {
                            newData.push(data[i])
                        }
                    }
                    if (newData == []) {
                        let extraProd = prod.filter(product => product.name.trim().toLowerCase().includes(key))
                        res.json(extraProd)
                    } else {
                        res.json(newData)
                    }
                } else {
                    res.json(data)
                }
            })
            .catch(next)
    }

    testing = async (req, res, next) => {
        // Chèn các sản phẩm vào database
        const rs = await Product.insertMany(productsList);
        res.json(rs)
    }

}

module.exports = new ProductController;