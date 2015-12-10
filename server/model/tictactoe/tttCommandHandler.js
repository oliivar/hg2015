var _ = require('lodash');
module.exports = function tictactoeCommandHandler(events) {
  var gameState = {
    gameCreatedEvent : events[0],
    board: [0,1,2,
            3,4,5,
            6,7,8],
    whosTurn: 'X',
    winner: false
  };

  var eventHandlers={
    'placed': function(event){
      gameState.board[event.place] = event.symbol;
      if (gameState.whosTurn === 'X') {
        gameState.whosTurn = 'O';
      } else {
        gameState.whosTurn = 'X';
      }
    },
    'Winner': function(event) {
      console.log('Avvvvdvdvdvdv');
      if (gameState.winner === true) {
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      }
    }
  };

  function isWinner() {
    if(gameState.board[0] === gameState.board[1] && gameState.board[1] === gameState.board[2]) {
      return true;
    }
    return false;
  }

  function resetBoard() {
    gameState.board = [0,1,2,
      3,4,5,
      6,7,8];
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
      //console.log();

      console.log(gameState.board);
      console.log('whosTurn = '+gameState.whosTurn + ' symbol = ' + cmd.symbol);
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
          gameState.board = resetBoard();
          return[{
            id: cmd.id,
            event: 'Winner',
            winner: true,
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
