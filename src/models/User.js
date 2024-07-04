const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "support_agent", "admin"], default: "customer" },
});

module.exports = mongoose.model("User", UserSchema);
