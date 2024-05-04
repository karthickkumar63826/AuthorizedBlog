const express = require("express");
const cors = require("cors");
const connectionDB = require("./utils/database");
const ErrorHandler = require("./Error/errHandler");
const userRoutes = require("./Routers/userRouter");
const blogRoutes = require("./Routers/blogRouter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(ErrorHandler);

const start = async () => {
  try {
    await connectionDB(process.env.MONGODB_LOCAL_URL);
    console.log("Successfully Connected with MONGODB database ");
    app.listen(port, () => {
      console.log(`server is running on the port no ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);
