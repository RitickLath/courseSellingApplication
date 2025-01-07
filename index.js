require("dotenv").config();
const express = require("express");
const { DatabaseConnect } = require("./config/db");
const { AdminRouter } = require("./routes/admin");
const { UserRouter } = require("./routes/user");
const { FreeRouter } = require("./routes/free");

const app = express();
app.use(express.json());

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/admin", AdminRouter);
app.use("/api/v1/free", FreeRouter);

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
