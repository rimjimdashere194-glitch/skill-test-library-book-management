require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();
const bookRoutes = require("./routes/bookRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", bookRoutes);

app.get("/", (req, res) => {
  res.send("Library Book Management System API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});