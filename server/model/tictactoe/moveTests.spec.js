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

  it('Should place X in place(1) on empty board',function(){
    given;
    when={
      id:"80085",
      command:"makeMove",
      place: 1,
      symbol: 'X',
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    };
    then=[{
      id:"80085",
      event:"placed(1,X)",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    }];
 
    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('Should try to place X in (0,0) on when (0,0) already occupied',function(){
    given.push("placed(0,0,X)");
    //console.log(given);
    when={
      id:"80085",
      command:"makeMove",
      place: 1,
      symbol: 'X',
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    };
    then=[{
      id:"80085",
      event:"illegalMove",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
