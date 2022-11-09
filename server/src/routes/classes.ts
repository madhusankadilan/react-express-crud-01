import express from "express";
import { addClass, fetchClasses } from "../controllers/class";

const classes = express.Router();

classes.get("/api/classes", fetchClasses);
classes.post("/api/classes", addClass);

export default classes;
