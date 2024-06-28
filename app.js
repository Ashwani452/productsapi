const express= require("express");
const app= express();
const port =process.env.PORT || 5000;
const products_routes= require("./routes/products");
const connectDb= require("./db/cnn");


app.get("/",(req,res)=>{
    res.end("I am Ready to use");
});

app.use("/api/products",products_routes);

const start=async()=>{
    try {
        await connectDb();
        app.listen(port,()=>{
            console.log(`server running at ${port}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();