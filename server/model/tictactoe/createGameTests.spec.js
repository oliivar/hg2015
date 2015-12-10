var tttCommandHandler = require('./tttCommandHandler');

describe('Create game command', function(){
  var given, when, then;

  it('create game without gameName',function(){
    given= [];
    when={
      id:"80085",
      command:"CreateGame",
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:29:44"
    };
    then=[{
      id:"80085",
      event:"GameCreated",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:29:44"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('should create game with another user another time with gameName',function(){
    given= [];
    when={
      id:"12347",
      command:"CreateGame",
      userName : "Hrolfur",
      gameName: "Hrolfsleikur",
      gameID: "12",
      timeStamp: "2017.12.02T10:29:44"
    };
    then=[{
      id:"12347",
      event:"GameCreated",
      userName: "Hrolfur",
      gameName: "Hrolfsleikur",
      gameID: "12",
      timeStamp: "2017.12.02T10:29:44"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
