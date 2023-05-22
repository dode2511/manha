import { Router } from "express"
import { ProdutoCreate, ProdutoIndex } from "./controllers/ProdutoController"



const router = Router()

router.get('/produto',ProdutoIndex)
      .post('/produto',ProdutoCreate)

export default router