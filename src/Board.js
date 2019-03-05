import React from 'react';
import Knight from './Knight';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from "./BoardSquare";

function renderSquare(i, knightPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
        <div key={i} style={{width: '12.5%', height: '12.5%'}}>
            <BoardSquare x={x}
                         y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    );
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight/>;
    }
}

function Board({knightPosition}) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {squares}
        </div>
    );
};

export default DragDropContext(HTML5Backend)(Board);