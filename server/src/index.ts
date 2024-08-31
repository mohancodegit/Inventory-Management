import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is running on port ", +port);
});

app.use("/dashboard", dashboardRoutes);
