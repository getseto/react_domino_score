import React from "react";
import { TextField, Button } from "@material-ui/core";

const NewGame = () => {
    const [newplayer, setNewPlayer] = React.useState('');
    const [players, setPlayers] = React.useState([]);
    const handleChange = (e) => {
        setNewPlayer(e.target.value)
    }
    const handleAddPlayer = (e) => {
        e.preventDefault();

        if (newplayer.trim() !== '') {
            setPlayers(players.concat(newplayer));
            setNewPlayer('');
        }
    }
    const playersList = players.map ((player, id) => {
        return (
        <li key = {id}>{player}</li>
        )
    }
    )
    return (
        <div>
            <p>New Game</p>
            <p>Agrega jugadores</p>
        
            <form onSubmit={handleAddPlayer} autoComplete="off">
                <TextField id="stardard-basic" label="Add a player" value = {newplayer} onChange={handleChange} />
                <Button onClick={handleAddPlayer}>Add new player</Button>
            </form>
            <ol>Jugador: {playersList}</ol>
        </div>
    )
}

export default NewGame;