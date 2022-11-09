import express from "express";
import { fetchSubjects } from "../controllers/subjects";

const subjects = express.Router();

subjects.get("/api/subjects", fetchSubjects);

export default subjects;
