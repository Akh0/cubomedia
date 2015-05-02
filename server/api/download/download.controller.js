'use strict';

var File = require('cubomedia-models').File;

// Get a single download
exports.show = function (req, res) {
    File.findById(req.params.id, function (err, file) {
        if (err) {
            return handleError(res, err);
        }
        if (!file) {
            return res.send(404);
        }
        res.download(file.filepath, function (err) {
            if (err)
                console.log(err);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}