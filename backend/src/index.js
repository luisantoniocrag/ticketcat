const express = require("express");
const app = express();
const {initServices} = require("./services/index");
const initMongoDB = require("./database/init");

const PORT = 5001

// TODO: cors to allow all origin:*
app.use(express.json());
app.listen(PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port: ${PORT}`)

        initServices(app)
        initMongoDB()

    } else {
        console.error(`Error while try to run the server: ${e.message}`)
        throw e
    }
});