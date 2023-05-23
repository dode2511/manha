import express from 'express'
import { sequelize } from './data/conecta.js'
import cors from "cors"
import routes from './routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Cliente.sync()
    await Excursao.sync()
    await Destino.sync()
    await Reserva.sync()
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API viagens avenida')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})