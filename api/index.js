import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";
import path from "path";
import cors from "cors";

const port  = process.env.PORT || 3000;
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// dynamic path name for static files and folder of client
const __dirname = path.resolve();

const app = express();

app.use(cors());

//  by default we are not allowed send json data to the server
// so we use middleware to parse json
app.use(express.json());

// cookie parsing with this
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



app.use("/api", userRouter);
app.use("/api", projectRouter);


// static folder of client  (in case creat-react-app dist will be build name instead)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})



// middle ware for error handling  use as next(error) in catch block
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
