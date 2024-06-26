require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

const authRoutes = require("./routes/authRoute");
const categoryRoutes = require("./routes/categoryRoute");
const productRoutes = require("./routes/productRoute");
const userRoutes = require("./routes/userRoute");
const reviewRoutes = require("./routes/reviewRoute");
const orderRoutes = require("./routes/orderRoute");

const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const connect = require("./configs/db");
connect();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/order", orderRoutes);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
