'use strict';

var request = require('supertest');
const expect = require('expect');
var app = require('../server');

describe('Weather app', () => {
    it('should get 200 on /weather', (done) => {
      request(app)
        .get('/weather')
        .expect(200)
        .end(done)
    });

    it('should return 404 if url is not found', (done) => {
    request(app)
        .get('/dummy')
        .expect(404)
        .end(done)
    });

    it('should return not valid city if city is not found', (done) => {
    request(app)
        .get('/weather/dummy')
        .expect(200)
        .expect((res) => {
        expect(res.text).toBe("\"Not a valid city\"");
        })
        .end(done)
    });

      
  })

  