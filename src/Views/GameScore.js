import React, {useContext, useState} from 'react';
import  { PlayersContext } from '../PlayersContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TableFooter } from '@material-ui/core';
import Score from '../Components/Score';

const GameScore = () => {
    const { game, addScoresToGame } = useContext(PlayersContext);
    
    const row = []
    const players = game.map(obj => obj.player)
    const [newScore, setNewScore] = useState([]);
    
    const handleSubmit = (data) => {
        console.log(data)
    }

    // console.log(players);
    

    // function createRow(number, scoreOne, scoreTwo, scoreThree) {
    //     return {number, score1, score2, score3}
    // }
    
    // function totalOne(playerOne) {
    //     return playerOne.map(({scoreOne}) => scoreOne).reduce((sum, i) => sum + i, 0);
    
    
    // const roundsPlayed = game[0].scores.length
    
    return (
        <form onSubmit={handleSubmit}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                # Game
                            </TableCell>
                            { players.map((player, index) => (
                                <TableCell key={`${index}-${player}`} align="center">
                                    {player}
                                </TableCell>
                            ))}
                            <TableCell>Guardar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { game[0].scores.map((round, roundNumber)=> (
                            <TableRow>
                                <TableCell>
                                    {roundNumber}
                                </TableCell>
                            { game.map((obj, index) => (
                                <TableCell key={`${index}-${obj.player}`} align="center">
                                    obj.scores[roundNumber]
                                </TableCell>
                            ))}
                            </TableRow>
                        ))}
                        <TableRow>
                            
                            <TableCell>
                                {game[0].scores.length + 1}
                            </TableCell>
                            { game.map((obj, index) => (
                                <TableCell key={obj.player}>
                                    <input onChange={(event) => {
                                        newScore[index] = event.target.value
                                         setNewScore(newScore)
                                        }} name={`score-${obj.player}`} />
                                </TableCell>
                            )) }
                            <TableCell><button type="submit" onClick={(event) => {
                                event.preventDefault();
                                handleSubmit(newScore)
                                }}>Save!</button></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                Total
                            </TableCell>
                            <TableCell>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Button>Agregar puntaje</Button>
        </form>
    )
}

export default GameScore;
