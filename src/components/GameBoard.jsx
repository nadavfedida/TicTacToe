import { useState } from "react";

const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBaord() {
    const [ gameBoard, setGameBoard] = useState(intialGameBoard);

    function handleSelectSquare(rowIndex, colIndex, ) {
        setGameBoard((PrevGameBoard) => {
            const updatedBoard = [...PrevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });
    } 


    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) =>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) =>
                        <li key={colIndex}>
                            <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    )}
                </ol>
            </li>
        )}
    </ol>
}