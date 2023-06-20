import { Router } from "express"
import { avaliacaoCreate, avaliacaoIndex, avaliacaoDestroy } from "./controllers/avaliacaoController.js"

const router = Router()

router.get('/avaliacao', avaliacaoIndex)
      .post('/avaliacao', avaliacaoCreate)
      .delete('/avaliacao/:id', avaliacaoDestroy)


export default router