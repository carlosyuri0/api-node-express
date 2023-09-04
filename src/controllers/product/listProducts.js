import product from '../../models/productModel.js'

const listProducts = async (req, res) => {
    try {
        const [rows] = await product.getAllProducts()
        if (rows.length === 0) {
            res.status(404).json({
                error: `Nenhum Produto Cadastrado`
            })
        } else {
            res.json({
                success: "Produto(s) Encontrado(s) com Sucesso",
                product: rows
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Erro no servidor"
        })
    }
}

export default listProducts