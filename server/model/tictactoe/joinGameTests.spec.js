var tttCommandHandler = require('./tttCommandHandler');

describe('join game command', function(){

  var given, when, then;

  it('should join game',function(){
    given= [{
      id:"1234",
      event:"GameCreated",
      userName: "Stebbi",
      gameName: "Stebbaleikur",
      gameID: "1337",
      timeStamp: "2015.12.02T11:29:44"
    }];
    when={
      id:"12345",
      command:"JoinGame",
      userName : "Hrolfur",
      gameName:"Stebbaleikur",
      timeStamp: "2015.12.02T11:30:50"
    };
    then=[{
      id:"12345",
      event:"Stebbaleikur Joined",
      userName: "Hrolfur",
      otherUserName: "Stebbi",
      timeStamp: "2015.12.02T11:30:50"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });

  it('should reject joining of a non-existing game',function(){
    given= [];
    when={
      id:"12345",
      command:"JoinGame",
      userName : "Hrolfur",
      gameName:"Stebbaleikur",
      timeStamp: "2015.12.02T11:30:55"
    };
    then=[{
      id:"12345",
      event:"Stebbaleikur DoesNotExist",
      userName: "Hrolfur",
      timeStamp: "2015.12.02T11:30:55"
    }];

    var actualEvents = tttCommandHandler(given).executeCommand(when);

    JSON.stringify(actualEvents).should.be.exactly(JSON.stringify(then));
  });
});
