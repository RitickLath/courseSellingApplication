const express = require("express");
const {
  signup,
  signin,
  getPurchasedCourses,
  purchaseCourse,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.post("/signup", signup);
UserRouter.post("/signin", signin);
UserRouter.get("/courses", getPurchasedCourses);
UserRouter.post("/courses/:id/purchase", purchaseCourse);

module.exports = { UserRouter };
