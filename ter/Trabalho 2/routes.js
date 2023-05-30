import { Router } from "express"
import {  matriculaCreate, matriculaDestroy, matriculaIndex } from "./controllers/matriculasController.js"
import { cursoCreate, cursoIndex } from "./controllers/cursoController.js"


const router = Router()

router.get('/matriculas', matriculaIndex )
      .post('/matriculas', matriculaCreate)
      .delete('/matriculas:id', matriculaDestroy)


router.get('/cursos',cursoIndex )
      .post('/cursos', cursoCreate)

export default router