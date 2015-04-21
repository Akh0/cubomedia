/**
 * Authentification
 */

'use strict';

var httpAuth = require('http-auth');

module.exports = function(app) {

    var basicAuth = httpAuth.basic({
        realm: 'CuboMedia Area',
        file: __dirname + '/api/auth/users.htpasswd'
    });

    app.use(httpAuth.connect(basicAuth));
};
