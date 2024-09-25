const express = require('express');
const dotenv = require('dotenv');
const { incomingRequestLogger } = require("./middleware/index.js")
const indxeRouter = require("./routes/index")
const mongoose = require('mongoose')
dotenv.config();

const app = express();

app.use(incomingRequestLogger);
app.use("/api/v1", indxeRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
    mongoose.connect(process.env.MONGOOSE_URI_STRING);
    mongoose.connection.on("error", (err) => {
        console.log(err);
    })
})