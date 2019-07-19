const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name:String,
  genre:String,
  origin:String,
  members:[String],
  age:Number,
  image:String
});

const Artist = mongoose.model('Artist',ArtistSchema);

module.exports = Artist;
