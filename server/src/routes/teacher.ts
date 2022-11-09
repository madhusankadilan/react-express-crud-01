import { addTeacher, fetchTeachers } from "./../controllers/teacher";
import express from "express";

const teacher = express.Router();

teacher.get("/api/teachers", fetchTeachers);
teacher.post("/api/teachers", addTeacher);

export default teacher;
