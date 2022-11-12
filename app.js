const express = require("express");
const connectDB = require("./db/connectDB");
const router = require("./routes/todoRoute");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/v1/todo", router);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) { 
    console.log(error);
  }
};

start();
