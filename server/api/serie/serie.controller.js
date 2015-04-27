'use strict';

var _ = require('lodash');
var Serie = require('cubomedia-models').Serie;

// Get list of series
exports.index = function (req, res) {
    var conditions = {user: req.user};

    if (req.query.q) {
        var regexCond = {$regex: '.*' + req.query.q + '.*', $options: 'i'};
        conditions.$or = [{title: regexCond}, {originalTitle: regexCond}];
    }

    if (req.query.category)
        conditions.category = req.query.category;

    Serie.find(conditions, function (err, series) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, series);
    });
};

// Get a single serie
exports.show = function (req, res) {
    var conditions = {user: req.user, _id: req.params.id};

    Serie.findOne(conditions, function (err, serie) {
        if (err) {
            return handleError(res, err);
        }
        if (!serie) {
            return res.send(404);
        }
        return res.json(serie);
    });
};

//// Creates a new serie in the DB.
//exports.create = function (req, res) {
//    Serie.create(req.body, function (err, serie) {
//        if (err) {
//            return handleError(res, err);
//        }
//        return res.json(201, serie);
//    });
//};
//
//// Updates an existing serie in the DB.
//exports.update = function (req, res) {
//    if (req.body._id) {
//        delete req.body._id;
//    }
//    Serie.findById(req.params.id, function (err, serie) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!serie) {
//            return res.send(404);
//        }
//        var updated = _.merge(serie, req.body);
//        updated.save(function (err) {
//            if (err) {
//                return handleError(res, err);
//            }
//            return res.json(200, serie);
//        });
//    });
//};
//
//// Deletes a serie from the DB.
//exports.destroy = function (req, res) {
//    Serie.findById(req.params.id, function (err, serie) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!serie) {
//            return res.send(404);
//        }
//        serie.remove(function (err) {
//            if (err) {
//                return handleError(res, err);
//            }
//            return res.send(204);
//        });
//    });
//};

function handleError(res, err) {
    return res.send(500, err);
}