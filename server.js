
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import authRoutes from "./src/routes/auth.js";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

app.use("/auth", authRoutes);

app.listen(3000, ()=>console.log("Nexus SSO running"));
