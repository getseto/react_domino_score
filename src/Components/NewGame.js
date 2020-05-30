import React, { useContext, useState } from "react";
import { PlayersContext } from '../PlayersContext';
import { TextField, Button } from "@material-ui/core";
import history from '../Utils/history';

const NewGame = () => {
    const {game, addPlayer} = useContext(PlayersContext)
    const [newPlayer, setNewPlayer] = useState('');
    
    const handleChange = (e) => {
        setNewPlayer(e.target.value)
    }
    const handleAddPlayer = (e) => {
        e.preventDefault();

        if (newPlayer.trim() !== '') {
            addPlayer(newPlayer);
            setNewPlayer('');
        }
    }
    const players = game.map(obj => obj.player);
    const playersList = players.map ((player, id) => 
        <li key={`${id}-player`}>{player}</li>
    )

    return (
        <div>
            <p>New Game</p>
            <p>Set players</p>
            <form onSubmit={handleAddPlayer} autoComplete="off">
                <TextField 
                id="stardard-basic" 
                label="Add a player" 
                value={newPlayer} 
                onChange={handleChange} />
                <Button 
                onClick={handleAddPlayer}>
                    Add new player
                </Button>
            </form>
            <ol>Players: {playersList}</ol>

            <Button onClick = {() =>history.push('/score')}>Let's begin the game!</Button> 
        </div>
    )
}

export default NewGame;