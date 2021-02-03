const express = require('express')
const app = express()
const conexao = require('./conexao')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const porta = 4000
app.listen(porta,  () => {
        console.log(`Servidor rodando em: http://localhost:${porta}`)
})

app.get('/', (req, res) => {
    conexao.query('select * from produto', (err, result)=> {
        res.json(result)
    })
})

app.post('/cad', (req, res) => {
    let dados = {
        descricao: req.body.descricao,
        preco: req.body.precom,
        imagem: "imgpadrao.jpg"
    }

    conexao.query("INSERT INTO produto SET?", dados, () => {
        return res.json({mensagem: "Inserido com sucesso!"})
    })
})
