import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields"
        });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch (error) {
        console.error(`Error in creating product: ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success : false,
            message : "Invalid Product id"
        })
    }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(201).json({
            success : true,
            message : "product with the id " + id + " has been deleted successfully!!"
        })
    } catch (error) {
        console.error(`Error message while deleting: ${error.message}`);
        res.status(500).json({
            success : false,
            message : "Server error"
        })
    }
}

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            products : products
        });
    }
    catch (error){
        console.error(`Error message while getting: ${error.message}`);
        res.status(500).json({
            success : false,
            message : "Server error"
        })
    }
}

export const updateProduct = async (req, res) => {

    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success : false,
            message : "Invalid Product id"
        })
    }

    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(201).json({
            success : true,
            data : updateProduct
        })
    } catch (error) {
        console.error(`Error message while updating: ${error.message}`);
        res.status(500).json({
            success: false,
            message : "Server error"
        })
    }
}
