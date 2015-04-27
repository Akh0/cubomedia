/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Truc = require('./truc.model');

exports.register = function(socket) {
  Truc.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Truc.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('truc:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('truc:remove', doc);
}