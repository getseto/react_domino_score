import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

// const game = [
//   {scores: [1], player: 'maria' },
//   {scores: [5] },
//   {scores: [0] },
//   {scores: [3] },
//   {scores: [13] },
// ]
// const scores = [1, 5, null, 3, 13]

export const PlayersProvider = ({ children }) => {
  const [game, setGame] = React.useState([]);
  const addScoresToGame = (scores) => {
    setGame(
      game.map((obj, index )=> {
        obj.scores.push(scores[index])
        return obj;
      })
    )
  }
  const addPlayer = (player) => {
    game.push({
      player,
      scores: [],
    })
    setGame(game)
  }
  const players = game.map(obj => obj.player);
  
  return (
    <PlayersContext.Provider
      value={{
        players,
        addPlayer,
        addScoresToGame,
        game
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
