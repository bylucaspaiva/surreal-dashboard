import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from '../models/User.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWitsStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id
        })
        return {
          ...product._doc,
          stat,

        }
      })
    );
    res.status(200).json(productsWitsStats);
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user"}).select("-password");
    console.log("Customers", customers);
    res.status(200).json(customers)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

export const getTransaction = async (req, res) => {
  try {
    const { page = 1, pageSize = 20, sort = null, search = ""} = req.query;

    const generatSort = () =>{
      const sortParsed = JSON.parse(sort);
      const sortFormatted = {
        [sortParsed.field]: sortParsed.sort = "asc" ? 1 : -1
      };

      return sortFormatted;
    }

    
    res.status(200).json()
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}