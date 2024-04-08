import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Team.css';

function createData(name, institute) {
    return { name, institute };
}

// Tabelas com nomes e institutos
const tableData = [
    { rows: [
        createData('Aires Silva', 'Professor do IBC'),
        createData('Amanda Tavares', '-'),
        createData('Ana Paula Mendes', '-'),
        createData('Barbara Barra', '-'),
        createData('Bianca Mello', '-'),
        createData('Camilla Gomes', '-'),
        createData('Carolina Bento', '-'),
        createData('Clara Farias', '-'),
        createData('Eduarda Marques', 'Instituto de Computação'),
        createData('Elisa Gomes', '-'),
        createData('Erica Bhering', '-')
    ]},
    { rows: [
        createData('Flavia Avena', '-'),
        createData('Francielle Silva', '-'),
        createData('Gustavo Marinatto', 'Instituto de Computação'),
        createData('Ingrid Pedreira', '-'),
        createData('Jackson Farias', '-'),
        createData('Julia Alves', '-'),
        createData('Larissa Gomes', '-'),
        createData('Larissa Barcellos', '-'),
        createData('Lorraine Ribeiro', '-'),
        createData('Luana Santos', '-'),
        createData('Maria Clara Alvarenga', '-')
    ]},
    { rows: [
        createData('Mariana Gomes', '-'),
        createData('Mariana Regado', '-'),
        createData('Micah Navia', '-'),
        createData('Priscila Marques', 'Professora do IBC'),
        createData('Rayssa Monteiro', '-'),
        createData('Rodrigo Barbosa', '-'),
        createData('Tarek Guimarães', '-'),
        createData('Thiago Cunha', '-'),
        createData('Victor Moraes', '-'),
        createData('Victor Santos', 'Instituto de Computação')
    ]}
];

function Team() {
    return (
        <React.Fragment>
            <div className='team-container'>
                <div className='team-title'>Equipe</div>
            </div>

            <div className='box'>
                {/* Para criar cada tabela */}
                {tableData.map((data, index) => (
                    <TableContainer key={index} component={Paper} sx={{ width: 400, borderRadius: 1, marginLeft: 5, marginRight: 5, height: 57+52.92*(data.rows.length), '@media (max-width: 430px)': { width: 350 } }}>
                        <Table sx={{ width: 400, "& .MuiTableRow-root:hover": { backgroundColor: "#d3d3d3" }, '@media (max-width: 430px)': { width: 350, height: 57+52.92*(data.rows.length) } }} aria-label={`tabela${index}`}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontFamily: 'Gravity-Bold', fontSize: 20, '@media (max-width: 430px)': { fontSize: 18 }  }}>Nome</TableCell>
                                    <TableCell align="center" sx={{ fontFamily: 'Gravity-Bold', fontSize: 20, '@media (max-width: 430px)': { fontSize: 18 }  }}>Instituto</TableCell>
                                </TableRow>
                            </TableHead>
                            {/* Para criar cada fileira */}
                            <TableBody>
                                {data.rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="center" component="th" scope="row" sx={{ fontFamily: 'Gravity', fontSize: 14, '@media (max-width: 430px)': { fontSize: 12 } }}>{row.name}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: 'Gravity', fontSize: 14, '@media (max-width: 430px)': { fontSize: 12 } }}>{row.institute}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Team;
