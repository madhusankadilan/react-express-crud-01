import cors from "cors";
import express from "express";
import errorHandler from "./middleware/errorHandler";
import fourOhFour from "./middleware/fourOhFour";
import teachers from "./routes/teachers";
import subjects from "./routes/subjects";
import classes from "./routes/classes";
import classLevels from "./routes/class-levels";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", teachers);
app.use("/", subjects);
app.use("/", classes);
app.use("/", classLevels);

app.use(fourOhFour);
app.use(errorHandler);

export default app;
