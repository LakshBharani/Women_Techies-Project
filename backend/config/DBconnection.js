const mongoose = require('mongoose');

const dbconnections = async() =>{
    try {
        await mongoose.connect(process.env.APP_MONGODB_URL);
        console.log("MongoDB Connected .......")
    } catch (error) {
        console.log(error)
    }
};
iki

module.exports = dbconnections;