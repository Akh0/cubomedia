'use strict';

var _ = require('lodash');
var Movie = require('cubomedia-models').Movie;

// Get list of movies
exports.index = function (req, res) {
    var conditions = {user: req.user, _type: 'Movie'};

    if (req.query.q) {
        var regexCond = {$regex: '.*' + req.query.q + '.*', $options: 'i'};
        conditions.$or = [{title: regexCond}, {originalTitle: regexCond}];
    }

    if (req.query.category)
        conditions.category = req.query.category;

    Movie.find(conditions, function (err, movies) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, movies);
    });
};

// Get a single movie
exports.show = function (req, res) {
    var conditions = {user: req.user, _id: req.params.id};

    Movie.findOne(conditions, function (err, movie) {
        if (err) {
            return handleError(res, err);
        }
        if (!movie) {
            return res.send(404);
        }
        return res.json(movie);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}