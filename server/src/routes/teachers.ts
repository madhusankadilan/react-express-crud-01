import { addTeacher, fetchTeachers } from "../controllers/teacher";
import express from "express";

const teachers = express.Router();

teachers.get("/api/teachers", fetchTeachers);
teachers.post("/api/teachers", addTeacher);

export default teachers;
