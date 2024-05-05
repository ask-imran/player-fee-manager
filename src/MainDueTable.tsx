import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import players from './playername.json'

export const MainDueTable = () => {

    const [playerDue] = useState(players.map((player: string) => ({ name: player, due: 0, status: '⌛' })));
    return (
        <>
            <h3>Total Due</h3>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 400 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Due</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {playerDue.map((player, index) => (
                                <TableRow key={index}>
                                    <TableCell>{player.name}</TableCell>
                                    <TableCell>{player.due}</TableCell>
                                    <TableCell>{player.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}