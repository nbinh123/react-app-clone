const express = require("express") // dùng thư viện expres
{
    // app.use(express.static(path.join(__dirname, "public")))
    // app.use(methodOverride("_method"))
    // // đây là bước lưu vào biến body cho req.body trong phương thức post của form

    // app.use(express.urlencoded({
    //     extended: true,
    // }
    // )
    // );
    // app.use(express.json());
    // //nodemon dùng để lắng nghe sự thay đổi file một cách liên tục
    // //sử dụng morgan
    // app.use(morgan("combined"))

    // //Template engineer
    // app.engine('hbs', handlebars.engine({
    //     extname: '.hbs',
    //     //partialsDir: path.join(__dirname, "views\\partials")
    //     helpers: {
    //         sum: (a, b) => a + b,
    //         convert: (text) => {
    //             if (text !== "") {
    //                 text = "-- " + text + " --"
    //                 return text
    //             }else{
    //                 return text
    //             }
    //         },
    //     }
    // }))
    // app.set('view engine', 'hbs')
    // app.set("views", path.join(__dirname, /* đường dẫn đến file views */ "resources\\views"))

    // // Local ( cục bộ ) host --- thuê hosting ( nơi lưu trữ ) => là 1
    // // Controller
}
const port = 3001
const app = express()
const path = require("path")
const methodOverride = require("method-override")
const cors = require('cors');
const db = require("./connectDB/db")
const route = require("./routes/routes")


db.connect()
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'hbs'); // đuôi tệp mẫu mặc định là '.hbs'

app.use(methodOverride("_method"))
// đây là bước lưu vào biến body cho req.body trong phương thức post của form
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

app.get("/haha", (req, res) => {
    res.json({
        message: "tao la binh"
    })
})


app.listen(port, () => console.log(`http://localhost:${port}`))


//////////////////////////////////////


// sử dụng hàm route đã định nghĩa trong ./routes/index.js
route(app)