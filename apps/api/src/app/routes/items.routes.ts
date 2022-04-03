

import { Router } from "express";
import { ItemController } from "../controllers/item.controller";

const itemsRouter = Router()
const itemController = new ItemController();

itemsRouter.get("/", itemController.get)
itemsRouter.get("/:id", itemController.getById)

export default itemsRouter