import express from 'express'
import getProduct from '../controllers/product/getProduct.js';
import insertProduct from '../controllers/product/insertProduct.js';
import updateProduct from '../controllers/product/updateProduct.js';
import deleteProduct from '../controllers/product/deleteProduct.js';

const productRouter = express.Router();

productRouter.get('/', getProduct)       //ler
productRouter.post('/', insertProduct)   //criar
productRouter.put('/', updateProduct)    // atualizar
productRouter.delete('/', deleteProduct) // deletar

export default productRouter