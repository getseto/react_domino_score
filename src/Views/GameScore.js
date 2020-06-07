import React, {useContext, useState} from 'react';
import  { PlayersContext } from '../PlayersContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TableFooter, TextField } from '@material-ui/core';

const GameScore = () => {
    const { game, addScoresToGame } = useContext(PlayersContext);
    const players = game.map(obj => obj.player)
    const [newScore, setNewScore] = useState([]);
    const handleSubmit = (data) => {
        const parseData = data.map(score => parseInt(score, 10))
        addScoresToGame(parseData)
        setNewScore()
        setNewScore([])
    }
    
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
                            <TableCell>Save</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { game[0].scores.map((round, roundNumber)=> (
                            <TableRow key={roundNumber}>
                                <TableCell>
                                    {roundNumber + 1}
                                </TableCell>
                            { game.map((player, index) => (
                                <TableCell key={`${player.player}-${index}`} align="center">
                                    {player.scores[roundNumber]}
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
                                    <TextField onChange={(event) => {
                                        newScore[index] = event.target.value
                                         setNewScore(newScore)
                                        }} name={`score-${obj.player}`} value={newScore[index]} />
                                </TableCell>
                            )) }
                            <TableCell><button type="reset" onClick={(event) => {
                                handleSubmit(newScore)
                                }}>Save!</button></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                Total
                            </TableCell>
                            { game.map((player, index) => (
                                <TableCell key={index} align="center">
                                    {player.scores.reduce((sum, i) => sum + i, 0)}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </form>
    )
}

export default GameScore;
