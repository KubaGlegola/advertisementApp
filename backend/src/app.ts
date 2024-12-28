import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { verifyToken } from "./middlewares/verifyToken";
import authRouter from "./routes/auth.route";

dotenv.config();
const port = 5000;

const corsOptions = {
  origin: "http://localhost:3000", // Zastąp swoją domeną
  credentials: true, // Pozwala na przesyłanie ciasteczek
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", verifyToken, (req, res) => {
  res.send("Hello, TypeScript Node Express!!");
});

app.use("/auth", authRouter);

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
