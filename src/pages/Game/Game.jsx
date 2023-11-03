import { useState } from 'react'

import "./Game.css"
import Board from '../../components/Board/Board';
import { Link } from 'react-router-dom';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const turn = currentMove % 2 === 0
    const currentBoard = history[currentMove];


    const handlePlay = (squares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), squares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li className='move-list-item' key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <main className="game">
            <section className='game-board'>
                <Board turn={turn} squares={currentBoard} onPlay={handlePlay} />
                <Link className='game-link' to="/">Menu</Link>
            </section>
            <section className='game-info'>
                <h1>Game History</h1>
                <ol className='move-list'>
                    {moves}
                </ol>
            </section>
        </main>
    )
}
