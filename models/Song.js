const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  title:String,
  year:Number,
  Artist:{
    type:Schema.Types.ObjectId,
    ref: "Artist"
  },
  length:String,
  Lyrics:String
});

const Song = mongoose.model('Song',SongSchema);

module.exports = Song;
