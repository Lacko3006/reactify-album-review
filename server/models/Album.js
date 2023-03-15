const { Schema, model } = require("mongoose")

const albumSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
  songs: [{
    type: String,
    trim: true,
  }]
})

const Album = model('album', albumSchema)

module.exports = Album