import express from 'express'
import { sequelize } from './database/conecta.js'
import cors from "cors"
import routes from './routes.js'
import { Aluno } from './models/Aluno.js'
import { Professor } from './models/Professor.js'
import { Curso } from './models/Curso.js'
import { Matricula } from './models/Matricula.js'

const app = express()
const port = 3000


app.use(express.json())
app.use(cors())
app.use(routes)





async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados realizada com sucesso');
    await sequelize.sync(); 
    await Curso.sync()
    await Professor.sync()
    await Aluno.sync()
    await Matricula.sync()
     
   // await sequelize.sync({alter: true});  
   //await sequelize.sync({force: true});  
   
  } catch (error) {
    console.error('Erro na conexão com o banco: ', error);
      
}
}
conecta_db()

app.get('/', (req, res) => {
  res.send('API colegio: Cadastro de Alunos e Professores')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta: ${port}`)
})