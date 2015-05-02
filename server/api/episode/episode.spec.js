'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Serie = require('cubomedia-models').Serie;

describe('GET /api/episodes', function () {

    it('should respond with JSON array', function (done) {

        Serie.findOne(function (err, serie) {
            request(app)
                .get('/api/episodes?serieID=' + serie._id)
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    res.body.should.be.instanceof(Array);
                    done();
                });
        });
    });
});