const mongoose = require("mongoose");
const Course = require("./Course.model");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentID: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 6,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    grade: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    // lessons: {
    //   type: Course,
    // },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
