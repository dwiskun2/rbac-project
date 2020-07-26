const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArtikelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artikel: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Artikel = mongoose.model('artikel', ArtikelSchema);