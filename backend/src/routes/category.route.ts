import express from "express";
import categoryController from "../controllers/category.controller";
import upload from "../middlewares/multer";
import { verifyToken } from "../middlewares/verifyToken";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import addCategorySchema from "../schemas/category/addCategory.schema";
import updateCategorySchema from "../schemas/category/updateCategory.schema";

const categoryRouter = express.Router();

categoryRouter.get("/", categoryController.getAll);

categoryRouter.get("/:slug", categoryController.getOne);

categoryRouter.post(
  "/",
  verifyToken,
  upload.single("file"),
  validateRequestBody(addCategorySchema),
  categoryController.create
);

categoryRouter.put(
  "/:slug",
  verifyToken,
  upload.single("file"),
  validateRequestBody(updateCategorySchema),
  categoryController.update
);

categoryRouter.delete("/:slug", verifyToken, categoryController.remove);

export default categoryRouter;
