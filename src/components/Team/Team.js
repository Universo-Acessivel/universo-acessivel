import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Team.css';
import { useContext } from 'react';
import { TextReaderContext } from '../../context/TextReaderContext';

function createData(name, institute) {
    return { name, institute };
}

const boxHeight = 73.033;
const boxWidth = 400;

// Tabelas com nomes e institutos
const tableData = [
    { rows: [
        createData('Aires Silva', 'Instituto Benjamin Constant'),
        createData('Amanda Tavares', 'Arquitetura-UFRJ'),
        createData('Ana Paula Costa', 'Arquitetura-UFRJ'),
        createData('Débora Brandão', 'Astronomia-UFRJ'),
        createData('Eduarda Marques', 'Ciência da Computação-UFRJ'),
        createData('Gustavo Marinatto', 'Ciência da Computação-UFRJ'),
        createData('Ingrid Nogueira', 'Arquitetura-UFRJ'),
    ]},
    { rows: [
        createData('Jackson de Farias', 'Espaço Nave – Casa da Ciência/Planetário'),
        createData('Jeanine Geammal', 'Escola de Belas Artes-UFRJ'),
        createData('Júlia Alves', 'Astronomia-UFRJ'),
        createData('Larissa Gonçalves', 'Astronomia-UFRJ'),
        createData('Matheus Duque', 'Ciência da Computação-UFRJ'),
        createData('Matheus Hack', 'Ciência da Computação-UFRJ'),
        createData('Melissa Façanha', 'Design-UFRJ'),
        createData('Patrycia Atiara', 'Astronomia-UFRJ'),

    ]},
    { rows: [
        createData('Priscila Marques', 'Instituto Benjamin Constant'),
        createData('Rayssa Rayde', 'Astronomia-UFRJ'),
        createData('Samara Bastos', 'Astronomia-UFRJ'),
        createData('Silvia Lorenz-Martins', 'Observatório do Valongo'),
        createData('Victor de Lucca', 'Astronomia-UFRJ'),
        createData('Victor Moraes', 'Física-UFRJ'),
        createData('Victor Santos', 'Ciência da Computação-UFRJ')
    ]}
];

function Team() {
    const { isTextReaderEnabled } = useContext(TextReaderContext);

    const handleTextRead = (text) => {
        if (isTextReaderEnabled) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "pt-BR";
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div id="equipe" className='team-wrapper'>
            <div className='team-container'>
                <div 
                    className='team-title section-title'
                    onClick={(e) => handleTextRead(e.currentTarget.textContent)}
                    onMouseEnter={(e) => handleTextRead(e.currentTarget.textContent)}
                >
                    Nossa Equipe
                </div>
            </div>

            <div className='box'>
                {/* Para criar cada tabela */}
                {tableData.map((data, index) => (
                    <TableContainer key={index} component={Paper} sx={{ width: 400, borderRadius: 1, marginLeft: 5, marginRight: 5, height: boxHeight*(data.rows.length), '@media (max-width: 430px)': { width: 350 } }}>
                        <Table sx={{ width: { boxWidth }, "& .MuiTableRow-root:hover": { backgroundColor: "#f5f5f5" }, '@media (max-width: 430px)': { width: 350, height: 57+52.92*(data.rows.length) } }} aria-label={`tabela${index}`}>
                            {/* Para criar cada fileira */}
                            <TableBody>
                                {data.rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 },  height: boxHeight }} onClick={() => handleTextRead(row.name + row.institute)} onMouseEnter={() => handleTextRead(row.name + row.institute)}>
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
        </div>
    );
}

export default Team;
