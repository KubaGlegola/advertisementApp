import express from "express";
import categoryController from "../controllers/category.controller";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAll);

categoryRouter.get("/:slug", categoryController.getOne);

categoryRouter.post("/", categoryController.create);

categoryRouter.put("/:slug", categoryController.update);

categoryRouter.delete("/:slug", categoryController.remove);

export default categoryRouter;
