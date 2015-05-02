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

function handleError(res, err) {
    return res.send(500, err);
}