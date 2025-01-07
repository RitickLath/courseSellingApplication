const express = require("express");

exports.freeController = async (req, res) => {
  // show all free courses
  res.status(201).json({ message: "Here are all courses" });
};
