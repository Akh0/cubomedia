/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Fiche = require('./fiche.model');

exports.register = function(socket) {
  Fiche.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Fiche.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('fiche:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('fiche:remove', doc);
}