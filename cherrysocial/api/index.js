const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
dotenv.config();

const app = express();

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectToDatabase();
//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.listen(8800, () => {
  console.log("Server running on port 8800");
});
