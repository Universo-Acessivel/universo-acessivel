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

const boxHeight = 73.033;
const boxWidth = 400;

// Tabelas com nomes e institutos
const tableData = [
    { rows: [
        createData('Aires Silva', 'Benjamin Constant'),
        createData('Amanda Tavares', 'Astronomia'),
        createData('Ana Paula Mendes', 'Arquitetura e Urbanismo'),
        createData('Barbara Barra', '-'),
        createData('Bianca Mello', '-'),
        createData('Camilla Gomes', 'Terapia Ocupacional'),
        createData('Carolina Bento', '-'),
        createData('Clara Farias', '-'),
        createData('Eduarda Marques', 'Ciência da Computação'),
        createData('Elisa Gomes', '-'),
        createData('Erica Bhering', '-')
    ]},
    { rows: [
        createData('Flavia Avena', 'Astronomia'),
        createData('Francielle Silva', '-'),
        createData('Gustavo Marinatto', 'Ciência da Computação'),
        createData('Ingrid Pedreira', 'Arquitetura'),
        createData('Jackson Farias', 'Museu de Astronomia e Ciências Afins'),
        createData('Julia Alves', '-'),
        createData('Larissa Gomes', 'Astronomia'),
        createData('Larissa Barcellos', '-'),
        createData('Lorraine Ribeiro', 'Terapia Ocupacional'),
        createData('Luana Santos', '-'),
        createData('Maria Clara Alvarenga', 'Astronomia')
    ]},
    { rows: [
        createData('Mariana Gomes', 'Astronomia'),
        createData('Mariana Regado', '-'),
        createData('Micah Navia', '-'),
        createData('Priscila Marques', 'Benjamin Constant'),
        createData('Rayssa Monteiro', 'Astronomia'),
        createData('Rodrigo Barbosa', '-'),
        createData('Silvia Lorenz Martins', 'Observatório do Valongo'),
        createData('Tarek Guimarães', '-'),
        createData('Thiago Cunha', '-'),
        createData('Victor Moraes', 'Física'),
        createData('Victor Santos', 'Ciência da Computação')
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
                    <TableContainer key={index} component={Paper} sx={{ width: 400, borderRadius: 1, marginLeft: 5, marginRight: 5, height: 57+boxHeight*(data.rows.length), '@media (max-width: 430px)': { width: 350 } }}>
                        <Table sx={{ width: { boxWidth }, "& .MuiTableRow-root:hover": { backgroundColor: "#d3d3d3" }, '@media (max-width: 430px)': { width: 350, height: 57+52.92*(data.rows.length) } }} aria-label={`tabela${index}`}>
                            <TableHead>
                                <TableRow>
                                    <TableCell 
                                        align="center" 
                                        sx={{   fontFamily: 'Gravity-Bold', 
                                                fontSize: 20, 
                                                '@media (max-width: 430px)': { fontSize: 18 }  }}>
                                        Nome
                                    </TableCell>
                                    <TableCell 
                                        align="center" 
                                        sx={{   fontFamily: 'Gravity-Bold', 
                                                fontSize: 20, 
                                                '@media (max-width: 430px)': { fontSize: 18 }  }}>
                                        Curso/Instituto
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            {/* Para criar cada fileira */}
                            <TableBody>
                                {data.rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 },  height: boxHeight }}>
                                        <TableCell 
                                            align="center" 
                                            component="th" 
                                            scope="row" 
                                            sx={{   width: 0, 
                                                    fontFamily: 'Gravity', 
                                                    fontSize: 14, 
                                                    '@media (max-width: 430px)': { fontSize: 12 } }}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell 
                                            align="center" 
                                            sx={{   width: 0, /* don't ask me how, but it works! tá centralizando os nomes dentro da box, a msm coisa na celula de cima. */
                                                    fontFamily: 'Gravity', 
                                                    fontSize: 14, 
                                                    '@media (max-width: 430px)': { fontSize: 12 } }}>
                                            {row.institute}
                                        </TableCell>
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
