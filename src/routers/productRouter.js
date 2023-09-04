import express from 'express'
import getProduct from '../controllers/product/getProduct.js';
import listProducts from '../controllers/product/listProducts.js';
import insertProduct from '../controllers/product/insertProduct.js';
import updateProduct from '../controllers/product/updateProduct.js';
import deleteProduct from '../controllers/product/deleteProduct.js';

const productRouter = express.Router();

productRouter.get('/', getProduct)       //ler
productRouter.get('/list', listProducts)
productRouter.post('/', insertProduct)   //criar
productRouter.put('/', updateProduct)    // atualizar
productRouter.delete('/', deleteProduct) // deletar

export default productRouter