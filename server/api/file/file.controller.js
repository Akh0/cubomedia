'use strict';

var _ = require('lodash');
var Movie = require('cubomedia-models').Movie;
var Serie = require('cubomedia-models').Serie;

// Get list of files
exports.index = function (req, res) {
    var conditions = {user: req.user};

    if (req.query.q) {
        var regexCond = {$regex: '.*' + req.query.q + '.*', $options: 'i'};
        conditions.$or = [{title: regexCond}, {originalTitle: regexCond}];
    }

    if (req.query.category)
        conditions.category = req.query.category;

    conditions._type = 'Movie';

    Movie.find(conditions, function (err, movies) {
        if (err) {
            return handleError(res, err);
        }

        delete conditions._type;

        Serie.find(conditions, function (err, series) {
            if (err) {
                return handleError(res, err);
            }

            return res.json(200, _.union(movies, series));
        });
    });

};

function handleError(res, err) {
    return res.send(500, err);
}