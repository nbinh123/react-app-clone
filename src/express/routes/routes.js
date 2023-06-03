// import các controller 
const productRoute = require("../routes/route/productRoute")

function router(app){ 
    app.use("/products", productRoute)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
    // app.use("/haha",  controller)
}

module.exports = router