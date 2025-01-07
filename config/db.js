const mongoose = require("mongoose");

const DatabaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    throw new Error("Database connection failed");
  }
};

module.exports = { DatabaseConnect };
