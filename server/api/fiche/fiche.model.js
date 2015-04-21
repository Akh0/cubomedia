'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FicheSchema = new Schema({
    name: String,
    filepath: String,
    category: String,
    user: String
});

module.exports = mongoose.model('Fiche', FicheSchema);