import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//     return (
//         <button className={['square'].concat(props.highlight ? ['highlight'] : []).join(' ')} onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }
//
// class Board extends React.Component {
//     renderSquare(i, highlight) {
//         return <Square key={i} highlight={highlight} value={this.props.values[i]} onClick={() => this.props.onClick(i)}/>;
//     }
//
//     render() {
//         const totalPoint = this.props.values.length;
//         const len = Math.sqrt(totalPoint);
//         if (len > Math.floor(len)) {
//             throw new Error('棋盘大小需为整数！');
//         }
//
//         const boardStatus = this.props.boardStatus;
//         const board = Array.from({length: len}).map((val, row) => {
//             const oneRowItem = Array.from({length: len}).map((val, col) => {
//                 const point = (row * 3) + col;
//                 return (this.renderSquare(point, boardStatus.line.includes(point)));
//             });
//
//             return (
//                 <div className="board-row" key={row}>
//                     {oneRowItem}
//                 </div>
//             );
//         });
//
//         return (
//             <div>
//                 {board}
//             </div>
//         );
//     }
// }
//
// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             history: [
//                 {
//                     values: new Array(9).fill(''),
//                     point: -1
//                 }
//             ],
//             asc: true,
//             stepNumber: 0,
//             nextIsX: true
//         }
//     }
//
//     handleClick(i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const { values } = history[history.length - 1];
//         if (calculateWinner(values).status !== 'CONTINUE' || values[i]) {
//             return;
//         }
//
//         const newValues = values.slice();
//         newValues[i] = this.state.nextIsX ? 'X' : 'O';
//
//         this.setState({
//             history: history.concat(
//                 {
//                     values: newValues,
//                     point: i
//                 }
//             ),
//             stepNumber: this.state.stepNumber + 1,
//             nextIsX: !this.state.nextIsX
//         });
//     }
//
//     jumpStep(step) {
//         this.setState({
//             stepNumber: step,
//             nextIsX: step % 2 === 0
//         });
//     }
//
//     changeSort() {
//         this.setState({
//             asc: !this.state.asc
//         });
//     }
//
//     render() {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const {values} = history[history.length - 1];
//         const boardStatus = calculateWinner(values);
//
//         let status = '';
//         if (boardStatus.status === 'WINNER') {
//             status = 'Winner is: ' + boardStatus.winner;
//         } else if (boardStatus.status === 'TIE') {
//             status = 'TIE';
//         } else {
//             status = 'Next player: ' + (this.state.nextIsX ? 'X' : 'O');
//         }
//
//         const moves = this.state.history.map((info, step) => {
//             const { point } = info;
//             const desc = step
//                 ? 'Go to move #' + step + `(${Math.floor(point / 3) + 1}, ${point % 3 + 1}):`
//                 : 'Go to game start';
//
//             return (
//                 <li key={step} onClick={() => this.jumpStep(step)}>
//                     <button className={step === this.state.stepNumber ? 'cur-step' : ''}>{desc}</button>
//                 </li>
//             );
//         });
//
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board values={values} boardStatus={boardStatus} onClick={(i) => this.handleClick(i)}/>
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <button onClick={() => this.changeSort()}>{ this.state.asc ? 'ascending' : 'descending' }</button>
//                     <ol>{this.state.asc ? moves : moves.reverse()}</ol>
//                 </div>
//
//                 { this.renderTestCtx() }
//             </div>
//         );
//     }
// }
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     const result = {
//         status: 'CONTINUE',
//         line: [],
//         winner: ''
//     }
//
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return Object.assign(result, {
//                 status: 'WINNER',
//                 line: [a, b, c],
//                 winner: squares[a]
//             });
//         }
//     }
//
//     let isTie = true;
//     for (let i = 0; i < squares.length; i++) {
//         if (!squares[i]) {
//             isTie = false;
//             break;
//         }
//     }
//     return Object.assign(result, isTie ? { status: 'TIE'} : {});
// }
//
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

// --------------------------------------

// function renderTestCtx() {
//     const element = React.createElement(
//         'h1',
//         {className: 'greeting'},
//         'Hello, world!'
//     );
//
//     return element;
// }
//
// ReactDOM.render(
//     renderTestCtx(),
//     document.getElementById('root')
// );


// --------------------------------------

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);


// --------------------------------------

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
//
// // ReactDOM.render(Welcome({name: 'jianjian'}), document.getElementById('root'));
//
// ReactDOM.render(<Welcome name='jianjian' />, document.getElementById('root'));


// --------------------------------------


// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
// );


// -------------------------------------


// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
//
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }
//
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
//
//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }
//
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );


// 条件渲染
// -------------------------------

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
//
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );
//
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <h2>login</h2>;
//     }
//     return <h2>guest</h2>;
// }
//
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );


// 列表 & Key
// -----------------------------


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
//
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('root')
// );

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>{number}</li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
//
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );

// 一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性


// 表单
// ----------------------------


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的文章: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ['coconut', 'mango']};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味:
                    <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(<input value="hi" />, document.getElementById('root'));

setTimeout(function() {
    ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 1000);

// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root')
// );
