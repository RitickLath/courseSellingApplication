require("dotenv").config();
const express = require("express");
const { DatabaseConnect } = require("./config/db");

const app = express();
app.use(express.json());

// Start the server only if the database connection is successful
const startServer = async () => {
  try {
    await DatabaseConnect();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.info(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error.message);
    process.exit(1);
  }
};

startServer();
