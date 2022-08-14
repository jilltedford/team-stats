const team = {
  _players: [{
    firstName: 'Sam',
    lastName: 'Smith',
    age: 25
  },
  {
    firstName: 'John',
    lastName: 'Johnson',
    age: 27
  },
  {
    firstName: 'Matt',
    lastName: 'Matthews',
    age: 28
  }],
  _games: [{
    opponent: 'Penguins',
    teamPoints: 3,
    opponentPoints: 2
  },
  {
    opponent: 'Red Hawks',
    teamPoints: 4,
    opponentPoints: 1
  },
  {
    opponent: 'Predators',
    teamPoints: 2,
    opponentPoints: 4
  }],
  get players(){
    if(this._players) {
      return this._players;
    }
  },
  get games(){
    if(this._games) {
      return this._games;
    }
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    }
    this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game)
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Titans', 100, 98);
console.log(team._games);
