import { Router } from "express";
import { produtoIndex,produtoStore } from "../controllers/produtoController";

const routes = Router()

routes.get(`/produtos`,produtoIndex)

export default router