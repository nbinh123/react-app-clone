// bắt đầu với file home
// là trang dành cho trang chủ, chứa các thông tin tổng quát
// bất cứ file nào cũng phải import các thư viện như thế này

const express = require("express")
const router = express.Router()
// nạp file HomeController
const ProductController = require("../../controllers/ProductController")
router.use('/api/find', ProductController.find)
router.use('/api/get', ProductController.index)
router.use('/api/add', ProductController.add)
module.exports = router