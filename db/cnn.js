const mongoose =require("mongoose");

uri="mongodb+srv://hanzira45:3ycvYhBgizz62cL6@cluster0.0xacrxi.mongodb.net/testproducts?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(uri);
}

module.exports= connectDb;