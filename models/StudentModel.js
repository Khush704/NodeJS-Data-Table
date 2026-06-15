import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: "String",
  email: "String",
  password: "String",
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
