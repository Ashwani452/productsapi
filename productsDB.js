const connectDb=require("./db/cnn");
const Products=require("./modules/productsmodel");

const ProductsJson=require("./products.json");

const start=async()=>{
    try {
        await connectDb();
        await Products.create(ProductsJson);
        console.log("succes");
    } catch (err) {
        console.log(err);
    }
}

start();