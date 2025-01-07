const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [2, "Description must be at least 2 characters"],
    },
    Price: {
      type: Number,
      required: [true, "Price is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "imageUrl is required"],
      trim: true,
    },
    CreatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Course = mongoose.model("Course", CourseSchema);

module.exports = { Course };
