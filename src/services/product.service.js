// services
import { getAllProducts, saveProduct, getProductById, deleteProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};

const getById = async (id) => { 
  return await getProductById(id);
}; 

const createProduct = async (product) => {
  return await saveProduct(product);
};

const deleteProd = async (id) => {
  return await deleteProduct(id);
}

export default { getAll, getById, createProduct, deleteProd };
