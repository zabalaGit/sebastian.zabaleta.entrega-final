// controller
import productService from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const getProductById = async (req, res) => { 
  try {
    const id = req.params.id; 
    const products = await productService.getById(id);
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
}

const AddProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;

    // validar campos !
    if (!nombre) {
      throw new Error('El nombre de producto es requerido');
    }
    if (!precio) {
      throw new Error('El precio del producto es requerido');
    }else {
      if (precio<=0) {
        throw new Error('El precio debe ser mayor que cero');
      }      
    }    
    
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };

    await productService.createProduct(newProduct);
    res.status(200).json({ message: "Producto creado!", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

const DeleteProduct = async (req, res) => { 
  try {
    const id = req.params.id; 
    const products = await productService.deleteProd(id);
    res.status(200).json({ message: "producto eliminado!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
}

export default { getProducts, AddProduct, getProductById, DeleteProduct };
