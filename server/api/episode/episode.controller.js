'use strict';

var _ = require('lodash');
var Episode = require('cubomedia-models').Episode;

// Get list of episodes
exports.index = function (req, res) {
    if(!req.query.serieID)
        return handleError(res, "Argument missing: serieID");

    var conditions = {user: req.user, _type:'Episode', _serie: req.query.serieID};

    Episode.find(conditions, function (err, episodes) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, episodes);
    });
};

//// Get a single episode
//exports.show = function (req, res) {
//    Episode.findById(req.params.id, function (err, episode) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!episode) {
//            return res.send(404);
//        }
//        return res.json(episode);
//    });
//};
//
//// Creates a new episode in the DB.
//exports.create = function (req, res) {
//    Episode.create(req.body, function (err, episode) {
//        if (err) {
//            return handleError(res, err);
//        }
//        return res.json(201, episode);
//    });
//};
//
//// Updates an existing episode in the DB.
//exports.update = function (req, res) {
//    if (req.body._id) {
//        delete req.body._id;
//    }
//    Episode.findById(req.params.id, function (err, episode) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!episode) {
//            return res.send(404);
//        }
//        var updated = _.merge(episode, req.body);
//        updated.save(function (err) {
//            if (err) {
//                return handleError(res, err);
//            }
//            return res.json(200, episode);
//        });
//    });
//};
//
//// Deletes a episode from the DB.
//exports.destroy = function (req, res) {
//    Episode.findById(req.params.id, function (err, episode) {
//        if (err) {
//            return handleError(res, err);
//        }
//        if (!episode) {
//            return res.send(404);
//        }
//        episode.remove(function (err) {
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