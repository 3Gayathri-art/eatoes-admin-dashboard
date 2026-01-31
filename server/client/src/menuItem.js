const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    category: {
      type: String,
      enum: ["Appetizer", "Main Course", "Dessert", "Beverage"],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Text index for search
menuItemSchema.index({ name: "text" });

module.exports = mongoose.model("MenuItem", menuItemSchema);
