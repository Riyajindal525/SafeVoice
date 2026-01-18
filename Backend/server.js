import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import complaintRoutes from './routes/Complaint.routes.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api",authRoute );
app.use('/api', complaintRoutes);

mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));



app.listen(8080, () => {
  console.log("Server running on port 8080");
});
