const Products= require("../modules/productsmodel");

const getAllProducts=async(req,res)=>{
    const mydata=await Products.find({})
    res.status(200).json({mydata});
}

const getAllProductstesting=async(req,res)=>{
   const mydata= await Products.find(req.query);
   res.status(200).json({mydata});
}

module.exports ={getAllProducts,getAllProductstesting};