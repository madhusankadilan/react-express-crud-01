import express from "express";
import { fetchSubjects } from "../controllers/subjects";

const subject = express.Router();

subject.get("/api/subjects", fetchSubjects);

export default subject;
