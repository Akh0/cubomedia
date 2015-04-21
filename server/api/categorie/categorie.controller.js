'use strict';

var _ = require('lodash');
var Categorie = require('./categorie.model');

// Get list of categories
exports.index = function(req, res) {
    var categories = [
        {
            id: 1,
            nom: "Films 1080p",
            nbItems: 9
        },
        {
            id: 2,
            nom: "Films 720p",
            nbItems: 16
        },
        {
            id: 3,
            nom: "Films DivX",
            nbItems: 13
        }
    ];

    console.log(req.query.sub);

    return res.json(200, categories);

  //Categorie.find(function (err, categories) {
  //  if(err) { return handleError(res, err); }
  //  return res.json(200, categories);
  //});
};

// Get a single categorie
exports.show = function(req, res) {
  Categorie.findById(req.params.id, function (err, categorie) {
    if(err) { return handleError(res, err); }
    if(!categorie) { return res.send(404); }
    return res.json(categorie);
  });
};

// Creates a new categorie in the DB.
exports.create = function(req, res) {
  Categorie.create(req.body, function(err, categorie) {
    if(err) { return handleError(res, err); }
    return res.json(201, categorie);
  });
};

// Updates an existing categorie in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Categorie.findById(req.params.id, function (err, categorie) {
    if (err) { return handleError(res, err); }
    if(!categorie) { return res.send(404); }
    var updated = _.merge(categorie, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, categorie);
    });
  });
};

// Deletes a categorie from the DB.
exports.destroy = function(req, res) {
  Categorie.findById(req.params.id, function (err, categorie) {
    if(err) { return handleError(res, err); }
    if(!categorie) { return res.send(404); }
    categorie.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}