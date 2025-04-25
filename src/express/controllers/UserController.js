const express = require("express") // dùng thư viện express
const app = express()
const User = require("../modals/UserModal")
const { multipleMongooseToObject, singleMongooseToOject } = require("../ulti/convertMongoose")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

class ProductController {

    //  [POST]  /login
    login = async (req, res, next) => {
        const { username, password } = req.body;

        // Kiểm tra xem người dùng có tồn tại không
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ 
            message: 'User does not exist',
            status: 400, 
        });

        // Kiểm tra mật khẩu (so sánh mật khẩu nhập vào với mật khẩu mã hóa trong DB)
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ 
            message: 'Invalid credentials',
            status: 400 
        });

        // Tạo JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({
            token: token,
            status: 200,
            id: user._id
        });
    }

    //  [POST]  /sign_in
    sign_in = async (req, res, next) => {

        const { username, password } = req.body;

        // Kiểm tra xem người dùng đã tồn tại hay chưa
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json(
                {
                    message: 'User already exists',
                    status: 400
                }
            );
        }

        // Mã hóa mật khẩu
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Tạo người dùng mới
        const newUser = new User({
            username,
            password: hashedPassword
        });

        // Lưu người dùng vào database
        await newUser.save();
        res.status(200).json({ 
            message: 'User registered successfully',
            status: 200 
        });
    }

    //  [GET]   /get_information
    getInformation = async (req, res, next) => {
        try {
            const { userID } = req.params;
            console.log("ID: ", userID);
            
            // Kiểm tra nếu `userID` không được cung cấp
            if (!userID) {
                return res.status(400).json({ 
                    message: 'User ID is required', 
                    status: 400
                });
            }
    
            // Truy xuất thông tin người dùng
            const user = await User.findById(userID);
    
            // Nếu không tìm thấy người dùng, trả về thông báo lỗi
            if (!user) {
                return res.status(404).json({ 
                    message: 'User not found',
                    status: 400 
                });
            }
    
            // Trả về thông tin người dùng
            res.json({
                userID: user._id,
                name: user.name,
                status: 200
            });
    
        } catch (error) {
            // Bắt lỗi và trả về phản hồi lỗi
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    };
    
}

module.exports = new ProductController;