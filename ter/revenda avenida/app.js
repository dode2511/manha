import express from 'express'
import { sequelize } from './data/conecta.js'
import cors from "cors"
import routes from './routes.js'
import { Usuario } from './models/Usuario.js'
import { Cliente } from './models/Cliente.js'
import { Proposta } from './models/Propostas.js'
import { Carro } from './models/Carro.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Usuario.sync()
    await Cliente.sync()
    await Proposta.sync()
    await Carro.sync()
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API revenda avenida')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})