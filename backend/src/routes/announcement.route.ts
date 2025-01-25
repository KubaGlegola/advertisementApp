import express from "express";
import announcementController from "../controllers/announcement.controller";
import upload from "../middlewares/multer";
import { verifyToken } from "../middlewares/verifyToken";
import { validateRequestBody } from "../middlewares/validateRequestBody";
import addAnnouncementSchema from "../schemas/announcements/addAnnouncement.schema";
import updateAnnouncementSchema from "../schemas/announcements/updateAnnouncement.schema";

const announcementRouter = express.Router();

announcementRouter.get("/", announcementController.getAll);
announcementRouter.get("/:id", announcementController.getById);
announcementRouter.get("/category/:category", announcementController.getByCategory);
announcementRouter.get("/user/:userId", announcementController.getByUser);
announcementRouter.post(
  "/",
  verifyToken,
  upload.array("images"),
  validateRequestBody(addAnnouncementSchema),
  announcementController.create
);
announcementRouter.put(
  "/:id",
  verifyToken,
  upload.array("images"),
  validateRequestBody(updateAnnouncementSchema),
  announcementController.update
);
announcementRouter.delete("/:id", verifyToken, announcementController.remove);

export default announcementRouter;
