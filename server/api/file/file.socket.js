/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var File = require('cubomedia-models').File;

exports.register = function(socket) {
  File.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  File.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('file:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('file:remove', doc);
}