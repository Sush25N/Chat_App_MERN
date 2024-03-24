const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();

// console.log(mongoose.connect(process.env.MONGO_URI));

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is connected to DB");
  } catch (error) {
    console.log("Server is NOT connected to Database", error.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

// console.log(process.env.MONGO_URI);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running..."));
