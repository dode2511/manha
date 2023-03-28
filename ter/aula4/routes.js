import { Router } from "express"
import {jogadorCreate,jogadorDestroy,jogadorIndex,jogadorUpdate} from "./controllers/jogadorController.js"

const router = Router()

router.post('/jogadores', jogadorCreate)
      .get('/jogadores', jogadorIndex)
      .delete('/jogadores/:id', jogadorDestroy)
      .put('/jogadores/:id', jogadorUpdate)
      



export default router