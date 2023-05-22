import { Router } from "express"
import { carroCreate, carroIndex } from "./controllers/carroController"


const router = Router()

router.get('/carros',carroIndex )
      .post('/carros', carroCreate)
      
router.get('/cliente',  )
      .post('/cliente',  )


router.get('/vendedor',  )
      .post('/vendedor',   )

export default router