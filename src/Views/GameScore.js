import React, {useContext} from 'react';
import  { PlayersContext } from '../PlayersContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';

const GameScore = () => {
    const { players } = useContext(PlayersContext);
    console.log(players)

    return (
        <div>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            { players.map((player, index) => (
                                <TableCell key={`${index}-${player}`} align="center">
                                    {player}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* <TableRow>
                            <TableCell align="center">13</TableCell>
                            <TableCell align="center">100</TableCell>
                            <TableCell align="center">20</TableCell>
                            <TableCell align="center">0</TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button>Agregar puntaje</Button>
        </div>
    )
}

export default GameScore;