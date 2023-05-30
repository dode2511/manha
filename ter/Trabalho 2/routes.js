import { Router } from "express"
import { AlunoCreate, alunoIndex } from "./controllers/alunoController.js"
import { cursoCreate, cursoIndex } from "./controllers/cursoController.js"


const router = Router()

router.get('/alunos',alunoIndex )
      .post('/alunos', AlunoCreate)


router.get('/cursos',cursoIndex )
      .post('/cursos', cursoCreate)

export default router