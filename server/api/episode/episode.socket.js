/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Episode = require('./episode.model');

exports.register = function(socket) {
  Episode.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Episode.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('episode:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('episode:remove', doc);
}