import { Router } from "express";
import itemsRouter from "./items.routes";

const indexRouter = Router()

// Route Items
indexRouter.use("/items", itemsRouter)

export default indexRouter