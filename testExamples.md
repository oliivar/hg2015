Event 1 starting new game
{
	Creating game
	Given [], 
	When  [Create game]
	Then  [Game Created]


	Player 2 joins game
	Given [GameId:1], 
	When  [Join game]
	Then  [Player 2 joined game]

	Player 1 makes a move
	Given [(0,0,) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)]
	When  [Place(0,0,X)]
	Then  [Placed(0,0,X)]


	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,)], 
	When  [PLace(2,2,O)]
	Then  [Placed(2,2,O)]

	PLayer 1 makes a move
	Given [(0,0,X) (1,0,) (2,0,)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)], 
	When  [Place(2,0,X)]
	Then  [Placed(2,0,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)], 
	When  [PLace(1,0,O)]
	Then  [Placed(1,0,O)]

	Player 1 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,) (1,2,) (2,2,O)], 
	When  [PLace(0,2,X)]
	Then  [Placed(0,2,X)]

	Player 2 makes a move
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)], 
	When  [Place(0,1,O)]
	Then  [Placed(0,1,O)]

	Player 1 makes a move and wins
	Given [(0,0,X) (1,0,O) (2,0,X)
	       (0,1,O) (1,1,) (2,1,)
	       (0,2,X) (1,2,) (2,2,O)], 
	When  [Place(1,1,X)]
	Then  [Placed(1,1,X), Player 1 winns]
}


Given [Events], 
When [Command]
Then [Resulting Event(s)]


For example
Given [ Placed(0,0,X), Placed(0,1,X) ]
When [ Place(0,2,X) ]
Then [ X Won ]

