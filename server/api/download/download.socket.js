/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Download = require('./download.model');

exports.register = function(socket) {
  Download.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Download.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('download:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('download:remove', doc);
}