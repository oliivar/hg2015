var tttCommandHandler = require('./tttCommandHandler');

describe('Game move commands', function(){
  var when, then;

  beforeEach(function(){
    given = [{
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
  });

  it('Should place X in place(1) on empty board',function(){
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
      event:"placed",
      place: 1,
      symbol: "X",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('Should try to place O in 1 when 1 already occupied',function(){
    given.push({
      id:"80085",
      event:"placed",
      place: 1,
      symbol: "X",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    });

    when={
      id:"80085",
      command:"makeMove",
      place: 1,
      symbol: 'O',
      userName : "Hrolfur",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    };
    then=[{
      id:"80085",
      event:"illegalMove",
      userName: "Hrolfur",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('Should try to place X when its not his turn',function(){
    given.push({
      id:"80085",
      event:"placed",
      place: 1,
      symbol: "X",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    });
    when={
      id:"80085",
      command:"makeMove",
      place: 2,
      symbol: 'X',
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    };
    then=[{
      id:"80085",
      event:"NotYourTurn",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('Player should win on horizontal row',function(){
    given.push({
      event:"placed",
      place: 0,
      symbol: "X"
    },
    {
      event:"placed",
      place: 4,
      symbol: "O"
    },{
      event:"placed",
      place: 1,
      symbol: "X"
    },
    {
      event:"placed",
      place: 8,
      symbol: "O"
    });
    when={
      id:"80085",
      command:"makeMove",
      place: 2,
      symbol: 'X',
      userName : "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    };
    then=[{
      id:"80085",
      event:"Stebbi Wins",
      userName: "Stebbi",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:50"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('Player should win on vertical row',function(){
    given.push({
        event:"placed",
        place: 0,
        symbol: "X"
      },
      {
        event:"placed",
        place: 4,
        symbol: "O"
      },{
        event:"placed",
        place: 8,
        symbol: "X"
      },
      {
        event:"placed",
        place: 7,
        symbol: "O"
      },{
        event:"placed",
        place: 6,
        symbol: "X"
      });
    when={
      id:"80085",
      command:"makeMove",
      place: 1,
      symbol: 'O',
      userName : "Hrolfur",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    };
    then=[{
      id:"80085",
      event:"Hrolfur Wins",
      userName: "Hrolfur",
      gameID: "1337",
      timeStamp: "2015.12.02T11:31:44"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
