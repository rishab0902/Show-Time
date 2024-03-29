import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js"
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(
 
    
    
  `mongodb+srv://rishabdavksd:${process.env.MONGODB_PASSWORD}@cluster1.d0pk0bq.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Connected to database And Server is running");
    });
  })
  .catch((e) => console.log(e));

// console.log("hello");
// Ca8MVQtPTZJqZdSp
