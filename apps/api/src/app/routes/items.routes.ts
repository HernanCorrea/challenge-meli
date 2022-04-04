

import { Router } from "express";
import { ItemController } from "../controllers/item.controller";
import httpRequest from "../utils/http-request";

const itemsRouter = Router()
const itemController = new ItemController(httpRequest);

itemsRouter.get("/", itemController.get)
itemsRouter.get("/:id", itemController.getById)

export default itemsRouter