import { Router } from "express";
import studentController from "../controllers/StudentController.js";
import validation from "../middleware/ValidationMiddle.js";

const studentRounter = Router();

studentRounter.get("/", studentController.getAllStudent);
studentRounter.post("/",validation, studentController.createStudent);
studentRounter.delete("/:id", studentController.deleteStudent);
studentRounter.patch("/:id", studentController.updateStudent);


export default studentRounter;
