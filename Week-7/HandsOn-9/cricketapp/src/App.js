import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './components/IndianPlayers'; 

function App() {
  let flag = true; 
  // let flag = false; 

  const playersData = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianTeamMerged = [...T20Players, ...RanjiTrophyPlayers]; 

  
  const IndianTeamForDestructuring = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  return (
    <div className="App">
      {flag ? ( 
        <div>
          <ListofPlayers players={playersData} />
        </div>
      ) : (
        <div>

          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeamForDestructuring} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeamForDestructuring} />
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianTeamMerged} />
        </div>
      )}
    </div>
  );
}

export default App;