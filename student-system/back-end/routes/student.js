const router = require("express").Router();
const Student = require("../models/student.model");

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error is : " + err));
});

router.route("/add").post((req, res) => {
  const studentID = req.body.studentID;
  const name = req.body.name;
  const birthDate = req.body.birthDate;
  const className = req.body.className;
  const credits = req.body.credits;
  const grade = req.body.grade;
  const phone = req.body.phone;
  const password = req.body.password;

  const newStudent = new Student({
    studentID,
    name,
    birthDate,
    className,
    credits,
    grade,
    phone,
    password,
  });

  newStudent
    .save()
    .then(() => res.json("Student added!"))
    .catch((err) => res.status(400).json("Error is : " + err));
});

router.route("/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error is : " + err));
});

router.route("/update/:id").post((req, res) => {
  Student.findById(req.params.id)
    .then((newStudent) => {
      newStudent.name = req.body.name;
      newStudent.birthDate = req.body.birthDate;
      newStudent.className = req.body.className;
      newStudent.credits = Number(req.body.credits);
      newStudent.grade = Number(req.body.grade);
      newStudent.phone = req.body.phone;
      newStudent.password = req.body.password;

      newStudent
        .save()
        .then(() => res.json("Student updated!"))
        .catch((err) => res.status(400).json("Error is : " + err));
    })
    .catch((err) => res.status(400).json("Error is : " + err));
});

module.exports = router;
