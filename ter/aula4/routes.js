import { Router } from "express"
import {jogadorCreate,jogadorDestroy,jogadorIndex,jogadorUpdate} from "./controllers/jogadorController.js"

const router = Router()

router.post('/jogadores', jogadorCreate)
      .get('/jogadores', jogadorIndex)
      .delete('/jogadores', jogadorDestroy)
      .put('/jogadores', jogadorUpdate)
      



export default router