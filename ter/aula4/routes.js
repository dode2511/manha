import { Router } from "express"
import {jogadorAumentarIdade, jogadorCalculos, jogadorCreate,jogadorDestroy,jogadorIndex,jogadorPesqClube,jogadorPesqNome,jogadorPesqidade,jogadorUpdate} from "./controllers/jogadorController.js"

const router = Router()

router.post('/jogadores', jogadorCreate)
      .get('/jogadores', jogadorIndex)
      .delete('/jogadores/:id', jogadorDestroy)
      .put('/jogadores/:id', jogadorUpdate)
      .get('/jogadores/:pesq', jogadorPesqNome)
      .get('/jogadores/idades/:idade1/:idade2?', jogadorPesqidade)
      .get('/jogadores/mix/:nome_clube_posicao', jogadorPesqClube)
      .get('/jogadores/obter/calculos', jogadorCalculos)
      .put('/jogadores/aumentar/:idade', jogadorAumentarIdade)
      



export default router