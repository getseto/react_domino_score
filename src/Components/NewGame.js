import React, { useContext, useState } from "react";
import { PlayersContext } from '../PlayersContext';
import { TextField, Button } from "@material-ui/core";
import history from '../Utils/history';

const NewGame = () => {
    const {players, setPlayers} = useContext(PlayersContext)
    const [newPlayer, setNewPlayer] = useState('');
    
    const handleChange = (e) => {
        setNewPlayer(e.target.value)
    }
    const handleAddPlayer = (e) => {
        e.preventDefault();

        if (newPlayer.trim() !== '') {
            setPlayers(players.concat(newPlayer));
            setNewPlayer('');
        }
    }
    const playersList = players.map ((player, id) => 
        <li key={`${id}-player`}>{player}</li>
    )

    return (
        <div>
            <p>New Game</p>
            <p>Agrega jugadores</p>
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
            <ol>Jugador: {playersList}</ol>

            <Button onClick = {() =>history.push('/score')}>Empezar juego!</Button> 
        </div>
    )
}

export default NewGame;