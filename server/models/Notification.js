const mongoose = require("mongoose");

const notifSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  type: {
    type: String,
    enum: ["info", "success", "error", "warn"],
    default: "info",
  },
});

const Notification = mongoose.model("Notification", notifSchema);

module.exports = Notification;
