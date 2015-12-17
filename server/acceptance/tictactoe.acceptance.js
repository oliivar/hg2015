'use strict';

var should = require('should');
var request = require('supertest');

var user = require('./user.js').user();
var given = require('./given.js').given();

//var acceptanceUrl = process.env.ACCEPTANCE_URL;
var acceptanceUrl = require('../app');

describe('TEST ENV GET /api/gameHistory', function () {

  it('Should have ACCEPTANCE_URL environment variable exported.', function () {
    //console.log('ACCEPTANCE URL ' + acceptanceUrl);
    acceptanceUrl.should.be.ok;
  });

  it('should execute same test using old style', function (done) {

    var command =     {
      id:"1234",
      command:"createGame",
      userName : "Hrolfur",
      gameName: "Hrolfsleikur",
      gameID: "1337",
      timeStamp: "2017.12.02T10:29:44"
    };

    var req = request(acceptanceUrl);
    req
      .post('/api/createGame')
      .type('json')
      .send(command)
      .end(function (err, res) {
        if (err) return done(err);
        request(acceptanceUrl)
          .get('/api/gameHistory/1337')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            if (err) return done(err);
            res.body.should.be.instanceof(Array);
            should(res.body).eql(
              [{
                id:"1234",
                event:"GameCreated",
                userName: "Hrolfur",
                gameName: "Hrolfsleikur",
                whosTurn: "X",
                gameID: "1337",
                timeStamp: "2017.12.02T10:29:44"
              }]);
            done();
          });
      });
  });


  it('Should execute fluid API test for Create game with gameName', function (done) {
    given(user("Hrolfur").createsGame("Game").gameNamed("LaLLi"))
      .expect("GameCreated").withName("LaLLi").isOk(done);
  });

  it('Should execute fluid API test for Create game not with gameName', function (done) {
     given(user('Stebbi').createsGame('8000085')).
     expect("GameCreated").withName("8000085").isOk(done);
   });

  it('Should allow user to join a game', function (done) {
    given(user("Gudmundur").createsGame('BUlBs').gameNamed('BreakDancers'))
      .and(user("Adalsteinn").joinsGame('BUlBs'))
      .expect("Adalsteinn Joined BreakDancers").withName("BreakDancers").isOk(done);
  });

  it('Should play game until draw', function (done) {
    given(user("Stefan").createsGame("42").gameNamed("ofurleikur"))
      .and(user("Hreggvidur").joinsGame("42"))
      .and(user("Stefan").makesMove(0))
      .and(user("Hreggvidur").makesMove(8))
      .and(user("Stefan").makesMove(2))
      .and(user("Hreggvidur").makesMove(1))
      .and(user("Stefan").makesMove(6))
      .and(user("Hreggvidur").makesMove(3))
      .and(user("Stefan").makesMove(7))
      .and(user("Hreggvidur").makesMove(4))
      .and(user("Stefan").makesMove(5))
      .expect("Draw").withName("ofurleikur").isOk(done);
  });

  it('Should play game until winner', function (done) {
    given(user("Stefan").createsGame("422").gameNamed("ofurSleikur"))
      .and(user("Hreggvidur").joinsGame("422"))
      .and(user("Stefan").makesMove(3))
      .and(user("Hreggvidur").makesMove(8))
      .and(user("Stefan").makesMove(4))
      .and(user("Hreggvidur").makesMove(1))
      .and(user("Stefan").makesMove(5))
      .expect("Stefan Wins").withName("ofurSleikur").isOk(done);
  });

});
