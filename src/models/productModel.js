import db from '../database/db.js'

const getProductById = async (id) => {
    return await db.query("SELECT name, price FROM products WHERE id = ?", [id])
}

const getAllProducts = async () => {
    return await db.query("SELECT id, name, price FROM products")
}

const createProduct = async (product) => {
    const {name, price} = product
    return await db.query("INSERT INTO products (name, price) VALUES (?, ?);", [name, price])
}

const updateProduct = async (product) => {
    const {id, name, price} = product
    return await db.query("UPDATE products SET name = ?, price = ? WHERE id = ?", [name, price, id])
}

const removeProduct = async (id) => {
    return await db.query("DELETE FROM products WHERE id = ?", [id])
}

export default {getProductById, getAllProducts, createProduct, updateProduct, removeProduct}