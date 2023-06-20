import  express  from "express";
import cors from 'cors'
import routes from './routes.js'

import { Usuario } from "./models/usuario";
import { Restaurante } from "./models/restaurante";
import { Avaliacao } from "./models/Avaliacao";



app.use(express.json())
app.use(cors())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await Usuario.sync()
    await Restaurante.sync()
    await Avaliacao.sync() 
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
  }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API restaurante')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})