const mongoose = require("mongoose");
require("dotenv").config(); // Use require to load dotenv

async function configureDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Db connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { configureDb };