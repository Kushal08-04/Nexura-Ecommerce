require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5003;
// Connect Database
connectDB();

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Cart Service running on port ${PORT}`);
});