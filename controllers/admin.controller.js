// controllers/Admin.controller.js
exports.signup = async (req, res) => {
  // Handle Admin signup logic
  res.status(201).json({ message: "Admin signed up successfully" });
};

exports.signin = async (req, res) => {
  // Handle Admin signin logic
  res.status(200).json({ message: "Admin signed in successfully" });
};

exports.postCourses = async (req, res) => {
  // Handle fetching purchased courses
  res.status(200).json({ message: "Course Posted" });
};
