const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { incomingRequestLogger } = require("./middleware/index.js")
const indxeRouter = require("./routes/index")
const userRouter = require("./routes/user")
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(incomingRequestLogger);
app.use("/api/v1", indxeRouter);
app.use("/api/v1/user", userRouter);


app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
    mongoose.connect(process.env.MONGOOSE_URI_STRING, {

    });
    mongoose.connection.on("error", (err) =>{
        console.log(err);
    })

    
})