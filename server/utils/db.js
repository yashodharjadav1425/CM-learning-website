const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
console.log(URI);
const connectDb = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Connection successful to database");
    } catch (error) {
        console.log(URI)
        console.error("database connection failed");
        process.exit(0);
    }
   
};
module.exports = connectDb;