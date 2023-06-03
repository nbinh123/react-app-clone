const express = require("express") // dùng thư viện express
const app = express()
const Product = require("../modals/ProductModal")
const { multipleMongooseToObject, singleMongooseToOject } = require("../ulti/convertMongoose")

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
                    if (newData === []) {
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

}

module.exports = new ProductController;