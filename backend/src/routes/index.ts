import express from "express";
import authRouter from "./auth.route";
import categoryRouter from "./category.route";
import announcementRouter from "./announcement.route";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/announcement", announcementRouter);

export default router;
