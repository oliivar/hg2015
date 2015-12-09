Event 1: starting new game
{

	Creating game
	Given []
	When  [Create game]
	Then  [Game Created]

	Player 2 joins game
	Given [GameId:1]
	When  [Join game]
	Then  [Player 2 joined game]
}

Event 2: player 1 wins
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(2,2,O)]
	Then  [Placed(2,2,O)]

	PLayer 1 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [Place(2,0,X)]
	Then  [Placed(2,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [PLace(1,0,O)]
	Then  [Placed(1,0,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [PLace(0,2,X)]
	Then  [Placed(0,2,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)]
	When  [Place(0,1,O)]
	Then  [Placed(0,1,O)]

	Player 1 makes a move and wins
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,O) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)]
	When  [Place(1,1,X)]
	Then  [Placed(1,1,X), Player 1 winns]
}

Event 3 player 1 wins
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(0,2,O)]
	Then  [Placed(0,2,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,O) (1,2,) (2,2,)]
	When  [Place(1,0,X)]
	Then  [Placed(1,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,X) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,O) (1,2,) (2,2,)]
	When  [PLace(1,2,O)]
	Then  [Placed(1,2,O)]

	Player 1 makes a move and wins
	Given [(0,0,X) (1,0,X) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,O) (1,2,O) (2,2,)]
	When  [Place(2,0,X)]
	Then  [Placed(2,0,X), player 1 wins]
}

Event 4: Player 2 wins
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(2,2,O)]
	Then  [Placed(2,2,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [Place(1,1,X)]
	Then  [Placed(1,1,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,X) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [PLace(2,1,O)]
	Then  [Placed(2,1,O)]

	Player 1 makes move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,X) (2,1,O)
	       (0,2,) (1,2,) (2,2,O)]
	When  [Place(1,0,X)]
	Then  [Placed(1,0,X)]

	Player 2 makes a move and wins
	Given [(0,0,X) (1,0,X) (2,0,)
	       (0,1,) (1,1,X) (2,1,O)
	       (0,2,) (1,2,) (2,2,O)]
	When  [Place(2,0,O)]
	Then  [Placed(2,0,O), player 2 wins]
}

Event 5: Draw
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(2,2,O)]
	Then  [Placed(2,2,O)]

	PLayer 1 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [Place(2,0,X)]
	Then  [Placed(2,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [PLace(1,0,O)]
	Then  [Placed(1,0,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)]
	When  [PLace(0,2,X)]
	Then  [Placed(0,2,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)]
	When  [Place(0,1,O)]
	Then  [Placed(0,1,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,O) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)]
	When  [PLace(1,2,X)]
	Then  [Placed(1,2,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,O) (1,1,) (2,1,)
	       (0,2,X) (1,2,X) (2,2,O)]
	When  [Place(1,1,O)]
	Then  [Placed(1,1,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,O) (1,1,O) (2,1,)
	       (0,2,X) (1,2,X) (2,2,O)]
	When  [PLace(2,1,X)]
	Then  [Placed(2,1,X), Draw]
}

Event 6: illegal move
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,O)]
	Then  [Illegal move try again]
}

Event 7: not your turn 
{

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 1 makes a move again
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(1,0,X)]
	Then  [Not your turn]
}

Event 8: player disconnects
{
	
	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [PLace(0,0,X)]
	Then  [Placed(0,0,X)]

	Player 2 disconnects
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [player 2 leaves game]
	Then  [player 2 disconnected, player 1 wins]
}
