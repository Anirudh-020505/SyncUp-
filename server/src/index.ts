import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.ts";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
