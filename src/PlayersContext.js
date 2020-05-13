import React, { createContext, useState } from "react";

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = React.useState([]);

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
