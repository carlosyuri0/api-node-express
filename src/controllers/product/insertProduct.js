import product from '../../models/productModel.js'

const insertProduct = async (req, res) => {
    try {
        const productData = req.body
        const [result] = await product.createProduct(productData)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Produto inserido com Sucesso!",
                product: {
                    id: result.insertId,
                    ...productData
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no Servidor"
        })
    }
}

export default insertProduct