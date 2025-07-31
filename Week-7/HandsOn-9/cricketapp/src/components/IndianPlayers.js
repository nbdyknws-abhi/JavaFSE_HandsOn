import React from 'react';

export const OddPlayers = ({ players }) => {
  const [first, , third, , fifth] = players; // Destructuring for odd positions
  return (
    <div>
      <li>First : {first}</li>
      <li>Third : {third}</li>
      <li>Fifth : {fifth}</li>
    </div>
  );
};


export const EvenPlayers = ({ players }) => {
  const [, second, , fourth, , sixth] = players; // Destructuring for even positions
  return (
    <div>
      <li>Second : {second}</li>
      <li>Fourth : {fourth}</li>
      <li>Sixth : {sixth}</li>
    </div>
  );
};


export const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
};