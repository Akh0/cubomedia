'use strict';

var _ = require('lodash');
var Fiche = require('./fiche.model');

// Get list of fiches
exports.index = function (req, res) {
    var conditions = {user: req.user};

    if(req.query.q) {
        var regexCond = { $regex: '.*' + req.query.q + '.*', $options: 'i' };
        conditions.$or = [{ title: regexCond }, { originalTitle: regexCond }];
    }

    if (req.query.category)
        conditions.category = req.query.category;

    Fiche.find(conditions, function (err, fiches) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, fiches);
    });
};

// Get a single fiche
exports.show = function (req, res) {
    var conditions = {user: req.user, _id: req.params.id};

    Fiche.findOne(conditions, function (err, fiche) {
        if (err) {
            return handleError(res, err);
        }
        if (!fiche) {
            return res.send(404);
        }
        return res.json(fiche);
    });
};

// Creates a new fiche in the DB.
exports.create = function (req, res) {
    Fiche.create(req.body, function (err, fiche) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, fiche);
    });
};

// Updates an existing fiche in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Fiche.findById(req.params.id, function (err, fiche) {
        if (err) {
            return handleError(res, err);
        }
        if (!fiche) {
            return res.send(404);
        }
        var updated = _.merge(fiche, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, fiche);
        });
    });
};

// Deletes a fiche from the DB.
exports.destroy = function (req, res) {
    Fiche.findById(req.params.id, function (err, fiche) {
        if (err) {
            return handleError(res, err);
        }
        if (!fiche) {
            return res.send(404);
        }
        fiche.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}