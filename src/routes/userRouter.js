import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: "Get user"})
})

router.post('/', (req, res) => {
    res.json({message: "Método POST"})
})

router.put('/', (req, res) => {
    res.json({message: "Método PUT"})
})

router.delete('/', (req, res) => {
    res.json({message: "Método Delete"})
})

export default router