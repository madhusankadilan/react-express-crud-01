import cors from "cors";
import express from "express";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import root from "./routes/root";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", root);

app.use(fourOhFour);
app.use(errorHandler);

export default app;
