import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [game, setGame] = React.useState([]);
  const addScoresToGame = (scores) => {
    const gameScores = game.map((obj, index )=> {
      obj.scores.push(scores[index])
      return obj;
    })
    setGame(gameScores)
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