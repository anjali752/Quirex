import express from "express";
import { dbConnect } from "./config/db.js";
import router from "./route/userRoute.js";
import adminRoute from "./route/adminRoute.js";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(fileUpload());

// Database connection
dbConnect();

// Static folder
app.use("/img", express.static("uploads"));

// Routes
app.use("/api", router);
app.use("/api", adminRoute);

// Root route
app.get("/", (req, res) => {
    res.send("QuireX backend is running.");
});

// Test route
app.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend is working successfully.",
    });
});

// Vercel ke liye export
export default app;