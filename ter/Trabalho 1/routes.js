import { Router } from "express";

import { zooPesqRaca, zooCreate, zooDestroy, zooIndex,zooSomaCustos, zooUpdate, zooPesqCustoMensal } from "./controllers/zooControllers.js";
const routes = Router()



routes.get("/zoologico",zooIndex)
      .post("/zoologico",zooCreate)
      .put("/zoologico/:id",zooUpdate)
      .delete("/zoologico/:id",zooDestroy)
      .get("/zoologico/soma", zooSomaCustos)
      .get("/zoologico/:pesq", zooPesqRaca)
      .get("/zoologico/custo/:pesq", zooPesqCustoMensal)




export default routes










