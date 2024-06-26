// const express = require("express");
// const dotenv = require("dotenv");
// const { default: mongoose } = require("mongoose");
// const userRoutes = require("./Routes/userRoutes");

// const app = express();
// dotenv.config();

// // console.log(mongoose.connect(process.env.MONGO_URI));

// app.use(express.json());

// const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URI);
//     console.log("Server is connected to DB");
//   } catch (error) {
//     console.log("Server is NOT connected to Database", error.message);
//   }
// };

// connectDB();

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// app.use("/user", userRoutes);

// // console.log(process.env.MONGO_URI);
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log("Server is running..."));

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose"); // Changed this line to not use default import syntax.
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors"); // Import the cors package.

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

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

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
