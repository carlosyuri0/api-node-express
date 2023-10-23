import product from '../../models/productModel.js'

const updateProduct = async (req, res) => {
    try {
        const productData = req.body
        const [result] = await product.updateProduct(productData)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Dados do produto atualizados com Sucecsso!",
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

export default updateProduct