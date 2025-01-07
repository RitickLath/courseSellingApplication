const express = require("express");
const { freeController } = require("../controllers/free.controller");

const FreeRouter = express.Router();

// get all courses
FreeRouter.get("/courses", freeController);

module.exports = { FreeRouter };
