// import các controller 
const productRoute = require("../routes/route/productRoute")
const userRoute = require("../routes/route/userRoute")

function router(app){ 
    app.use("/products", productRoute)
    app.use("/user",  userRoute)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
}

module.exports = router