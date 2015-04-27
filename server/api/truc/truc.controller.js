'use strict';

var _ = require('lodash');
var Truc = require('./truc.model');

// Get list of trucs
exports.index = function(req, res) {
  Truc.find(function (err, trucs) {
    if(err) { return handleError(res, err); }
    return res.json(200, trucs);
  });
};

// Get a single truc
exports.show = function(req, res) {
  Truc.findById(req.params.id, function (err, truc) {
    if(err) { return handleError(res, err); }
    if(!truc) { return res.send(404); }
    return res.json(truc);
  });
};

// Creates a new truc in the DB.
exports.create = function(req, res) {
  Truc.create(req.body, function(err, truc) {
    if(err) { return handleError(res, err); }
    return res.json(201, truc);
  });
};

// Updates an existing truc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Truc.findById(req.params.id, function (err, truc) {
    if (err) { return handleError(res, err); }
    if(!truc) { return res.send(404); }
    var updated = _.merge(truc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, truc);
    });
  });
};

// Deletes a truc from the DB.
exports.destroy = function(req, res) {
  Truc.findById(req.params.id, function (err, truc) {
    if(err) { return handleError(res, err); }
    if(!truc) { return res.send(404); }
    truc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}