const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

///Router
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const productRoute=require('./routes/products');

//Connect MongoDB
dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, db) => {
    if (err) throw err;
    console.log('Connected to MongoDB');

});

///Middle ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//Route
app.use("/users",userRoute);
app.use("/auth",authRoute);
app.use("/product",productRoute);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
