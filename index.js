const express = require('express');
const app = express();
const http=require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

///Router
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const productRoute=require('./routes/products');
const provinceRouter=require('./routes/province');
const saleRoute=require('./routes/sale');


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
app.get('/',(req,res)=>{
    
    res.status(200).send(res.statusCode);
})
app.use("/users",userRoute);
app.use("/auth",authRoute);
app.use("/products",productRoute);
app.use("/province",provinceRouter);
app.use("/sales",saleRoute);

// const server=http.createServer((req,res)=>{

// });
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
