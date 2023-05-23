import { Router } from "express"
import { ClienteCreate, ClienteIndex } from "./controllers/clienteController"
import { destinoCreate, destinoIndex, excurasaoCreate, excursaoIndex, reservaCreate, reservaIndex } from "./controllers/viagemController"




const router = Router()

router.get('/cliente',ClienteIndex)
      .post('/cliente',ClienteCreate)
    
    
    
router.get('/viagem/reserva',reservaIndex)
      .post('/viagem/reserva',reservaCreate)
      
      .get('/viagem/excusao',excursaoIndex)
      .post('/viagem/excursao',excurasaoCreate)

      .get('/viagem/destino',destinoIndex)
      .post('/viagem/destino',destinoCreate)


export default router