const { Schema, model } = require("mongoose")

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  albums: [{
     type: Schema.Types.ObjectId,
     ref: 'album'
  }]
})

const Artist = model('artist', artistSchema)

module.exports = Artist