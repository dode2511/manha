import { Router } from "express"
import { bebeCreate, bebeIndex } from "./controllers/bebeController"
import { maeCreate, maeIndex } from "./controllers/maeController"
import { medicoCreate, medicoIndex } from "./controllers/medicoController"


const router = Router()

router.get('/bebe',bebeIndex )
      .post('/bebe',bebeCreate)
      
router.get('/mae', maeIndex )
      .post('/mae', maeCreate )


      router.get('/medico', medicoIndex )
      .post('/medico',  medicoCreate )

export default router