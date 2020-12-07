const router = require("express").Router();
const Course = require("../models/Course.model");

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error is : " + err));
});

module.exports = router;
