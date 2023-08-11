const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

function initMongoDB() {
    const mongoString = process.env.DATABASE_URL
    mongoose.connect(mongoString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const database = mongoose.connection

    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('Database Connected');
    })
}

module.exports = initMongoDB