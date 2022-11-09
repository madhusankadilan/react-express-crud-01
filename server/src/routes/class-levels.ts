import express from "express";
import { fetchSubjects } from "../controllers/subjects";

const classLevels = express.Router();

classLevels.get("/api/class-levels", fetchSubjects);

export default classLevels;
