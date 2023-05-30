import { Router } from "express"
import { bebeCreate, bebeIndex } from "./controllers/bebeController.js"

const router = Router()

router.get('/bebes', bebeIndex)
      .post('/bebes', bebeCreate)

export default router