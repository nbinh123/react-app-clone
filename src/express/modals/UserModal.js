const mongoose = require('mongoose');

const Schema = mongoose.Schema

//tạo bảng phác thảo để lấy api
const User = new Schema({
    name: { type: String, default: "Unknown person"},
    image: String,
    username: String,
    password: String
})

module.exports = mongoose.model('User', User, "users")