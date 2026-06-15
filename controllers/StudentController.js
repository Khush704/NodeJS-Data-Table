import { validationResult } from "express-validator";
import Student from "../models/StudentModel.js";

const studentController = {
  async getAllStudent(req, res) {
    try {
      const search = req.query.search || "";
      const page = req.query.page || "1";
      const limit = req.query.limit || "5";

      const skip = (page - 1) * limit;

      const data = await Student.find({
        name: { $regex: search, $option: "1" },
      })
        .skip(skip)
        .limit(limit)
        .sort({ name: -1 });

      return res.status(200).json({ message: "Get all data of student", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async createStudent(req, res) {
    try {
      const error = validationResult(req);
      if (error.array != 0) {
        return res.json(error.message);
      }

      const data = await Student.create(req.body);
      return res
        .status(201)
        .json({ message: "Student create succesfully", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deleteStudent(req, res) {
    try {
      console.log(req.params);
      const data = await Student.findByIdAndDelete(req.params.id);

      return res
        .status(201)
        .json({ message: "Student create succesfully", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async updateStudent(req, res) {
    try {
      console.log(req.params);
      const data = await Student.findOneAndReplace(req.params.id);

      return res
        .status(201)
        .json({ message: "Student Update succesfully", data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

export default studentController;
