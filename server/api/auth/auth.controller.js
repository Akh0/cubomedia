'use strict';

var _ = require('lodash');

exports.me = function(req, res) {
    if(!req.user) { return handleError(res, "Connexion requise !"); }
    return res.json(200, { username: req.user });
};

function handleError(res, err) {
  return res.send(500, err);
}