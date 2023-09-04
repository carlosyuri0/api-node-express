import user from '../../models/userModel.js'

const insertUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.create(userData)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Usuário inserido com Sucecsso!",
                user: {
                    id: result.insertId,
                    ...userData
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

export default insertUser