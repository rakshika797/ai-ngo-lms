import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import ngoRoutes from "./routes/ngoRoutes";
import studentRoutes from "./routes/studentRoutes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ngo", ngoRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.send("API Running...");
});

export default app;