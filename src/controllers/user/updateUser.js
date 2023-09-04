import user from '../../models/userModel.js'

const updateUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.update(userData)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Dados do usuário atualizados com Sucecsso!",
                user: {
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

export default updateUser