const mongoose = require('mongoose')
const validator = require('validator')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a category name"],
    lowercase: true,
    unique: true,
  },
  description: String,
  imageUrl: {
    type: String,
    validate: [validator.isURL, "Please provide a valid URL"]
  }
}, {timestamps:true,versionKey:false})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;