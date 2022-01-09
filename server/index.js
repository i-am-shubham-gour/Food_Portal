const express = require("express");
const connectDB = require("./config/DBconfig");
const path = require('path')
const FoodRoute = require("./routes/food.routes");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
require('dotenv').config({path:'./env.config'})


connectDB();
app.use(express.json());
app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/Food", FoodRoute);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log("Server running");
 
});
