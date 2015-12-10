var tttCommandHandler = require('./tttCommandHandler');

describe('Game move commands', function(){
  var when, then;

  var given = [{
    id:"1234",
    event:"GameCreated",
    userName: "Stebbi",
    gameName: "Stebbaleikur",
    gameID: "1337",
    timeStamp: "2015.12.02T11:29:44"
  },
    {
      id:"12345",
      event:"GameJoined",
      userName: "Hrolfur",
      otherUserName: "Stebbi",
      timeStamp: "2015.12.02T11:30:50"
    }];

  it('Should place X in (0,0) on empty board',function(){
    given;
    when={
      id:"80085",
      command:"makeMove",
      x: 0,
      y: 0,
      symbol: 'X',
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    };
    then=[{
      id:"80085",
      event:"placed(0,0,X)",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
