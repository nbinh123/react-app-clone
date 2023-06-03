module.exports = {
    multipleMongooseToObject: (mongooseArray) => {
        return mongooseArray.map(mongoose => mongoose.toObject())
    },
    singleMongooseToOject: (mongooseArray) => {
        return mongooseArray ? mongooseArray.toObject() : mongooseArray
    }
}