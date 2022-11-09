import cors from "cors";
import express from "express";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import teacher from "./routes/teacher";
import subject from "./routes/subject";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", teacher);
app.use("/", subject);

app.use(fourOhFour);
app.use(errorHandler);

export default app;
