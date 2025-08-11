require("dotenv").config();
const express = require("express");
const cors = require("cors"); // ✅ CORS import
const connectDB = require("./Config/db");

connectDB();

const app = express();

// ✅ CORS middleware lagana (routes se pehle)
app.use(cors({
    origin: "http://localhost:5173", // tumhara frontend ka URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/payments", require("./Routes/paymentRoutes"));

// Server start
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});
