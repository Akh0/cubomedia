/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Serie = require('cubomedia-models').Serie;

exports.register = function(socket) {
  Serie.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Serie.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('serie:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('serie:remove', doc);
}