import { addTeacher, fetchTeachers, editTeacher } from "../controllers/teacher";
import express from "express";

const teachers = express.Router();

teachers.get("/api/teachers", fetchTeachers);
teachers.post("/api/teachers", addTeacher);
teachers.put("/api/teachers", editTeacher);

export default teachers;
