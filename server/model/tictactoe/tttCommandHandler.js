var _ = require('lodash');
module.exports = function tictactoeCommandHandler(events) {
  var gameState = {
    gameCreatedEvent : events[0],
    board: [0,1,2,
            3,4,5,
            6,7,8],
    whosTurn: 'X',
    turns: 0
  };

  var eventHandlers={
    'placed': function(event){
      gameState.board[event.place] = event.symbol;
      gameState.turns += 1;
      if (gameState.whosTurn === 'X') {
        gameState.whosTurn = 'O';
      } else {
        gameState.whosTurn = 'X';
      }
    }
  };

  function isWinner() {
    if((gameState.board[0] === gameState.board[1] && gameState.board[1] === gameState.board[2])
      || (gameState.board[1] === gameState.board[4] && gameState.board[4] === gameState.board[7])
      || (gameState.board[0] === gameState.board[4] && gameState.board[4] === gameState.board[8])) {
      return true;
    }
    return false;
  }

  _.each(events, function(event){
    var eventHandler = eventHandlers[event.event];
    if(eventHandler) eventHandler(event);
  });


  var handlers = {
    "CreateGame": function (cmd) {
      {
        if(cmd.gameName === undefined) {
          return [{
            id: cmd.id,
            event: "GameCreated",
            userName: cmd.userName,
            whosTurn: 'X',
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp
          }];
        } else {
          return [{
            id: cmd.id,
            event: "GameCreated",
            userName: cmd.userName,
            gameName: cmd.gameName,
            whosTurn: 'X',
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp
          }];
        }
      }
    },
    "JoinGame": function (cmd) {
      {
        if (gameState.gameCreatedEvent === undefined) {
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
          otherUserName: gameState.gameCreatedEvent.userName,
          timeStamp: cmd.timeStamp
        }];
      }
    },
    "makeMove": function(cmd) {
      if (gameState.board[cmd.place] === 'X' || gameState.board[cmd.place] === 'O') {
        return[{
          id: cmd.id,
          event: 'illegalMove',
          userName: cmd.userName,
          gameID: cmd.gameID,
          timeStamp: cmd.timeStamp,

        }];
      } else if (gameState.whosTurn !== cmd.symbol){
        return[{
          id: cmd.id,
          event: 'NotYourTurn',
          userName: cmd.userName,
          gameID: cmd.gameID,
          timeStamp: cmd.timeStamp,

        }];
      } else {
        gameState.board[[cmd.place]] = cmd.symbol;
        if(isWinner() === true){
          return[{
            id: cmd.id,
            event: cmd.userName + ' Wins',
            userName: cmd.userName,
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp,
          }];
        }
        if(gameState.turns === 8) {
          return[{
            id: cmd.id,
            event: 'Draw',
            userName: cmd.userName,
            gameID: cmd.gameID,
            timeStamp: cmd.timeStamp,
          }];
        }
        return[{
          id: cmd.id,
          event: 'placed',
          place: cmd.place,
          symbol: cmd.symbol,
          userName: cmd.userName,
          gameID: cmd.gameID,
          timeStamp: cmd.timeStamp,
        }];
      }
    }
  };

  return {
    executeCommand: function (cmd) {
      return handlers[cmd.command](cmd);
    }
  };
};
