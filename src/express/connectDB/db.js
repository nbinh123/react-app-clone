const mongoose = require("mongoose")

async function connect() {

    // connect tới database blog
    try {
        await mongoose.connect('mongodb://127.0.0.1/my_database',{
            dbName : "shop",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log("Connect project Successfully")
    } catch (error) {
        console.log("Connect project Failure!")
    }

    // connect tới database collection
    
}

module.exports = { connect };