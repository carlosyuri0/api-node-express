import product from '../../models/productModel.js'

const deleteProduct = async (req, res) => {
    try {
        const productData = req.body
        const [result] = await product.removeProduct(productData.id)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Produto deletado com Sucecsso!",
                product: {
                    ...productData
                }
            })
        }
    } catch (error) {
        console.log(error)
        req.status(500).json({
            error: "Erro no Servidor"
        })
    }
}

export default deleteProduct