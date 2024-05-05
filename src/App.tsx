import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { MainDueTable } from './MainDueTable';
import Box from '@mui/material/Box';
import playerMatchDue from './playermatchdue.json'

type Player = {
  name: string;
  status: boolean;
};

type Match = {
  match: number;
  players: Player[];
};
const App = () => {
  const [Rounds] = useState<Match[]>(playerMatchDue);

  return (
    <div>
      <MainDueTable />
      <h4>Round Tables</h4>
      <Box display="flex">
        {Rounds.map((round, roundIndex) => (
          <Box key={roundIndex} mr={2}>
            <h5>
              <div>Round {roundIndex + 1}</div>
              <div> Date: {new Date().toLocaleDateString()}</div>
            </h5>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Paid</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {round.players.map((player, rowIndex) => (
                      <TableRow key={rowIndex}>
                        <TableCell>{player.name}</TableCell>
                        <TableCell>
                          <input
                            type="checkbox"
                            defaultChecked={player.status}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default App;
