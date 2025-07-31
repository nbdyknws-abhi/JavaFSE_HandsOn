import React from 'react';

const ListofPlayers = ({ players }) => {

  const allPlayers = players.map(item => ( 
    <div key={item.name}>
      <li>Mr. {item.name} <span>{item.score}</span></li>
    </div>
  ));

  const playersBelow70 = players.filter(item => item.score <= 70).map(item => ( 
    <div key={item.name}>
      <li>Mr. {item.name}</li>
    </div>
  ));

  return (
    <div>
      <h1>List of Players</h1>
      {allPlayers}

      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      {playersBelow70}
    </div>
  );
};

export default ListofPlayers;