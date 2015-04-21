'use strict';

var _ = require('lodash');
var Auth = require('./auth.model');


exports.me = function(req, res) {
    if(!req.user) { return handleError(res, "Vous n'êtes pas connecté !"); }
    return res.json(200, { username: req.user });
};

// Get list of auths
exports.index = function(req, res) {
  Auth.find(function (err, auths) {
    if(err) { return handleError(res, err); }
    return res.json(200, auths);
  });
};
//
//// Get a single auth
//exports.show = function(req, res) {
//  Auth.findById(req.params.id, function (err, auth) {
//    if(err) { return handleError(res, err); }
//    if(!auth) { return res.send(404); }
//    return res.json(auth);
//  });
//};
//
//// Creates a new auth in the DB.
//exports.create = function(req, res) {
//  Auth.create(req.body, function(err, auth) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, auth);
//  });
//};
//
//// Updates an existing auth in the DB.
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Auth.findById(req.params.id, function (err, auth) {
//    if (err) { return handleError(res, err); }
//    if(!auth) { return res.send(404); }
//    var updated = _.merge(auth, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, auth);
//    });
//  });
//};
//
//// Deletes a auth from the DB.
//exports.destroy = function(req, res) {
//  Auth.findById(req.params.id, function (err, auth) {
//    if(err) { return handleError(res, err); }
//    if(!auth) { return res.send(404); }
//    auth.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};

function handleError(res, err) {
  return res.send(500, err);
}