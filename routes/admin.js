const express = require("express");
const {
  signup,
  signin,
  postCourses,
} = require("../controllers/admin.controller");

const AdminRouter = express.Router();

AdminRouter.post("/signup", signup);

AdminRouter.post("/signin", signin);

// upload a new course as a instructor
AdminRouter.post("/course", postCourses);

module.exports = { AdminRouter };
