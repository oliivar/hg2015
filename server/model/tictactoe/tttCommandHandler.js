module.exports = function tictactoeCommandHandler(events) {
  var gameCreatedEvent = events[0];



  var handlers = {
    "CreateGame": function (cmd) {
      {
        if(cmd.gameName === undefined) {
          return [{
            id: cmd.id,
            event: "GameCreated",
            userName: cmd.userName,
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp
          }];
        } else {
          return [{
            id: cmd.id,
            event: "GameCreated",
            userName: cmd.userName,
            gameName: cmd.gameName,
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp
          }];
        }
      }
    },
    "JoinGame": function (cmd) {
      {
        if (gameCreatedEvent === undefined) {
          return [{
            id: cmd.id,
            event: cmd.gameName + " DoesNotExist",
            userName: cmd.userName,
            timeStamp: cmd.timeStamp
          }];
        }
        return [{
          id: cmd.id,
          event: cmd.gameName + " Joined",
          userName: cmd.userName,
          otherUserName: gameCreatedEvent.userName,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "makeMove": function(cmd) {
      //todo
    }
  };

  return {
    executeCommand: function (cmd) {
      return handlers[cmd.command](cmd);
    }
  };
};
