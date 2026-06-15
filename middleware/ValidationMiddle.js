import { body } from "express-validator";

const validation = [body("name").notEmpty().withMessage("Name is required")];

export default validation;
