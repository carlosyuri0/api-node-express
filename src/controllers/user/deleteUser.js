import user from '../../models/userModel.js'

const deleteUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.remove(userData.id)
        if (result.affectedRows === 1) {
            res.json({
                succes: "Usuário deletado com Sucecsso!",
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

export default deleteUser