import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import ngoRoutes from "./routes/ngoRoutes";
import studentRoutes from "./routes/studentRoutes";
import { errorHandler } from "./middleware/errorMiddleware";
import cookieParser from "cookie-parser";
import programRoutes from "./routes/programRoutes";
const app = express();
import applicationRoutes
from "./routes/applicationRoutes";
import enrollmentRoutes
from "./routes/enrollmentRoutes";
import certificateRoutes
from "./routes/certificateRoutes";

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use("/api/admin", adminRoutes);
app.use("/api/ngo", ngoRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/programs", programRoutes);
app.get("/", (req, res) => {
  res.send("API Running...");
});
app.use( "/api/applications",applicationRoutes);
app.use( "/api/enrollments",enrollmentRoutes);
app.use( "/api/certificates",certificateRoutes);
export default app;