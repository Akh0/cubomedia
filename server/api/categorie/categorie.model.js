'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  nom: String,
  nbItems: Number
});

module.exports = mongoose.model('Categorie', CategorieSchema);