const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  fullName: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: String },
  birthDay: { type: Date },
  avatar_img: { type: String, default: "/avatar.jpg" },
  themes: { type: String, default: "light" },
  donation_amount: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
