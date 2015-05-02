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

function handleError(res, err) {
    return res.send(500, err);
}