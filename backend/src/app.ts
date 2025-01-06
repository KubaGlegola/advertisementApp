import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import fs from "fs";
import { verifyToken } from "./middlewares/verifyToken";
import router from "./routes";

dotenv.config();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use("/uploads", express.static(uploadDir));

app.use(router);

app.get("/", verifyToken, (req, res) => {
  res.send("Hello");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  console.log(err);
  res.status(statusCode).json({ message: err.message });

  return;
});

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
