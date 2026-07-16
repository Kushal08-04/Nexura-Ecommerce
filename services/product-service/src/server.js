require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5002;
// Connect Database
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Product Service running on port ${PORT}`);
});