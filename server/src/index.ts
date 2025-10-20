import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://inventory-management-system-frontend-36wq.onrender.com",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
