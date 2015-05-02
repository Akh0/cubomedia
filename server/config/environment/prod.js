'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:
            undefined,

  // Server port
  port:
            8181,

  // MongoDB connection options
  mongo: {
    uri:
            'mongodb://localhost/cubomedia'
  }
};