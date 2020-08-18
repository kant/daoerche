import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className={['square'].concat(props.highlight ? ['highlight'] : []).join(' ')} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    renderSquare(i, highlight) {
        return <Square key={i} highlight={highlight} value={this.props.values[i]} onClick={() => this.props.onClick(i)}/>;
    }

    render() {
        const totalPoint = this.props.values.length;
        const len = Math.sqrt(totalPoint);
        if (len > Math.floor(len)) {
            throw new Error('棋盘大小需为整数！');
        }

        const boardStatus = this.props.boardStatus;
        const board = Array.from({length: len}).map((val, row) => {
            const oneRowItem = Array.from({length: len}).map((val, col) => {
                const point = (row * 3) + col;
                return (this.renderSquare(point, boardStatus.line.includes(point)));
            });

            return (
                <div className="board-row" key={row}>
                    {oneRowItem}
                </div>
            );
        });

        return (
            <div>
                {board}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    values: new Array(9).fill(''),
                    point: -1
                }
            ],
            asc: true,
            stepNumber: 0,
            nextIsX: true
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const { values } = history[history.length - 1];
        if (calculateWinner(values).status !== 'CONTINUE' || values[i]) {
            return;
        }

        const newValues = values.slice();
        newValues[i] = this.state.nextIsX ? 'X' : 'O';

        this.setState({
            history: history.concat(
                {
                    values: newValues,
                    point: i
                }
            ),
            stepNumber: this.state.stepNumber + 1,
            nextIsX: !this.state.nextIsX
        });
    }

    jumpStep(step) {
        this.setState({
            stepNumber: step,
            nextIsX: step % 2 === 0
        });
    }

    changeSort() {
        this.setState({
            asc: !this.state.asc
        });
    }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const {values} = history[history.length - 1];
        const boardStatus = calculateWinner(values);

        let status = '';
        if (boardStatus.status === 'WINNER') {
            status = 'Winner is: ' + boardStatus.winner;
        } else if (boardStatus.status === 'TIE') {
            status = 'TIE';
        } else {
            status = 'Next player: ' + (this.state.nextIsX ? 'X' : 'O');
        }

        const moves = this.state.history.map((info, step) => {
            const { point } = info;
            const desc = step
                ? 'Go to move #' + step + `(${Math.floor(point / 3) + 1}, ${point % 3 + 1}):`
                : 'Go to game start';

            return (
                <li key={step} onClick={() => this.jumpStep(step)}>
                    <button className={step === this.state.stepNumber ? 'cur-step' : ''}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board values={values} boardStatus={boardStatus} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button onClick={() => this.changeSort()}>{ this.state.asc ? 'ascending' : 'descending' }</button>
                    <ol>{this.state.asc ? moves : moves.reverse()}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const result = {
        status: 'CONTINUE',
        line: [],
        winner: ''
    }

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return Object.assign(result, {
                status: 'WINNER',
                line: [a, b, c],
                winner: squares[a]
            });
        }
    }

    let isTie = true;
    for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
            isTie = false;
            break;
        }
    }
    return Object.assign(result, isTie ? { status: 'TIE'} : {});
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);



