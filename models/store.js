const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      enum: {
        values: [
          "dhaka",
          "rajshahi",
          "chattogram",
          "sylhet",
          "khulna",
          "barishal",
          "rangpur",
          "mymensingh"
        ],
        message: "{VALUE} is not  a correct division!",
      },
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User"
      }
    },
  },
  {timestamps:true,versionKey:false}
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;