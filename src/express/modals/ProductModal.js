const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const Product = new Schema({
    name: String,
    image: String,
    price: Number
})

module.exports = mongoose.model('Product', Product, "products")