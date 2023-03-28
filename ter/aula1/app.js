
import express from "express"
import { sequelize } from "./database/conecta.js"

const app = express()
const port = 3000

import routes from "./routes.js"

app.use(express.json())
app.use(routes)

async  function conecta_db(){
    try{
        await sequelize.authenticator()
        console.log(`conexao com o banco realizada com sucesso`);
        await sequelize.sync()
    } catch (error) {
        console.log(`Errp ma comexao com o banco: `,error);
    }
}
conecta_db()

app.get('/', (req, res) => {
  res.send('aula 1')
})

app.listen(port, () => {
  console.log(`serviço rodando na porta:${port}`)
})