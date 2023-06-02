import { Router } from "express"
import {  matriculaCreate,  matriculaIndex } from "./controllers/matriculasController.js"
import { cursoCreate, cursoIndex } from "./controllers/cursoController.js"


const router = Router()

router.get('/matriculas', matriculaIndex )
      .post('/matriculas', matriculaCreate)
     


router.get('/cursos',cursoIndex )
      .post('/cursos', cursoCreate)

export default router