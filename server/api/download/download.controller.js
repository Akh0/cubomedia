'use strict';

var _ = require('lodash'),
    fs = require('fs');
var File = require('cubomedia-models').File;

//// Get list of downloads
//exports.index = function(req, res) {
//  Download.find(function (err, downloads) {
//    if(err) { return handleError(res, err); }
//    return res.json(200, downloads);
//  });
//};

// Get a single download
exports.show = function(req, res) {
    File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
      //console.log(fiche);
      //console.log(fiche.filepath);
        res.download(file.filepath);
      //return res.json(fiche);
  });
};

//// Creates a new download in the DB.
//exports.create = function(req, res) {
//  Download.create(req.body, function(err, download) {
//    if(err) { return handleError(res, err); }
//    return res.json(201, download);
//  });
//};
//
//// Updates an existing download in the DB.
//exports.update = function(req, res) {
//  if(req.body._id) { delete req.body._id; }
//  Download.findById(req.params.id, function (err, download) {
//    if (err) { return handleError(res, err); }
//    if(!download) { return res.send(404); }
//    var updated = _.merge(download, req.body);
//    updated.save(function (err) {
//      if (err) { return handleError(res, err); }
//      return res.json(200, download);
//    });
//  });
//};
//
//// Deletes a download from the DB.
//exports.destroy = function(req, res) {
//  Download.findById(req.params.id, function (err, download) {
//    if(err) { return handleError(res, err); }
//    if(!download) { return res.send(404); }
//    download.remove(function(err) {
//      if(err) { return handleError(res, err); }
//      return res.send(204);
//    });
//  });
//};

function handleError(res, err) {
  return res.send(500, err);
}