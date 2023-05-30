import { Router } from "express"
import { AlunoCreate, alunoIndex } from "./controllers/alunoController.js"


const router = Router()

router.get('/alunos',alunoIndex )
      .post('/alunos', AlunoCreate)

export default router