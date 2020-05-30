import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { PlayersContext } from '../PlayersContext';

const Score = () => {
  const { scores, setScores } = useContext(PlayersContext);
  

  return(
    <div></div>
  )
}

export default Score;