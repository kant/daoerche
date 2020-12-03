import React, {Profiler, Suspense} from 'react';
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


// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('提交的名字: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }

// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('提交的文章: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     文章:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }

// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ['coconut', 'mango']};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('你喜欢的风味是: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     选择你喜欢的风味:
//                     <select multiple={true} value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">葡萄柚</option>
//                         <option value="lime">酸橙</option>
//                         <option value="coconut">椰子</option>
//                         <option value="mango">芒果</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         );
//     }
// }

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     参与:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     来宾人数:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

// setTimeout(function() {
//     ReactDOM.render(<input value={null} />, document.getElementById('root'));
// }, 1000);

// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('root')
// );


// 组合 vs 继承
// -----------------------------

//   function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }

//   function WelcomeDialog() {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     );
//   }

//   function Dialog(props) {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           {props.title}
//         </h1>
//         <p className="Dialog-message">
//           {props.message}
//         </p>
//         {props.children}
//       </FancyBorder>
//     );
//   }

//   class SignUpDialog extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSignUp = this.handleSignUp.bind(this);
//       this.state = {login: ''};
//     }

//     render() {
//       return (
//         <Dialog title="Mars Exploration Program"
//                 message="How should we refer to you?">
//           <input value={this.state.login}
//                  onChange={this.handleChange} />
//           <button onClick={this.handleSignUp}>
//             Sign Me Up!
//           </button>
//         </Dialog>
//       );
//     }

//     handleChange(e) {
//       this.setState({login: e.target.value});
//     }

//     handleSignUp() {
//       alert(`Welcome aboard, ${this.state.login}!`);
//     }
//   }

// ReactDOM.render(
//     <SignUpDialog />,
//     document.getElementById('root')
// );


// React 哲学
// ----------------------------

// 但你如何确定应该将哪些部分划分到一个组件中呢？你可以将组件当作一种函数或者是对象来考虑，根据单一功能原则来判定组件的范围。也就是说，一个组件原则上只能负责一个功能。如果它需要负责更多的功能，这时候就应该考虑将它拆分成更小的组件。

// 代码分割
//
// const MyHeader = React.lazy(() => {
//     const com = import('./components/header')
//     return new Promise(res => {
//         setTimeout(() => {
//             res(com);
//         }, 1000)
//     })
// });
//
// // import MyHeader from "./components/header";
//
// const Main = () => (
//     <Suspense fallback={<div>Loading...</div>}>
//         <MyHeader />
//     </Suspense>
// )
//
// ReactDOM.render(
//     <Main />,
//     document.getElementById('root')
// )

// Context

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
// const ThemeContext = React.createContext('light');
// class App extends React.Component {
//     render() {
//         // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//         // 无论多深，任何组件都能读取这个值。
//         // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//         return (
//             <ThemeContext.Provider value="dark">
//                 <Toolbar />
//             </ThemeContext.Provider>
//         );
//     }
// }
//
// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//     return (
//         <div>
//             {ThemedHeader()}
//             <ThemedButton />
//         </div>
//     );
// }
//
// const ThemedHeader = (...rest) => {
//     if (rest.length > 0) {
//         const value = rest[0];
//         return (
//             <h1>{value} Theme!!!</h1>
//         )
//     }
//
//     return (
//         <ThemeContext.Consumer>
//             {value => ThemedHeader(value)}
//         </ThemeContext.Consumer>
//     )
// }
//
// class ThemedButton extends React.Component {
//     // 指定 contextType 读取当前的 theme context。
//     // React 会往上找到最近的 theme Provider，然后使用它的值。
//     // 在这个例子中，当前的 theme 值为 “dark”。
//     static contextType = ThemeContext;
//     render() {
//         return <Button theme={this.context} />;
//     }
// }
//
// const Button = (props) => {
//     return <button>{props.theme}</button>
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


// import {ThemeContext, themes} from './components/theme-context';
// import ThemeTogglerButton from './components/theme-toggler-button';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         };
//
//         // State 也包含了更新函数，因此它会被传递进 context provider。
//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         };
//     }
//
//     render() {
//         // 整个 state 都被传递进 provider
//         return (
//             <ThemeContext.Provider value={this.state}>
//                 <Content />
//             </ThemeContext.Provider>
//         );
//     }
// }
//
// class Content extends React.Component {
//     render() {
//         const { theme, toggleTheme } = this.context;
//
//         return (
//             <button          onClick={toggleTheme}
//                              style={{backgroundColor: theme.background}}>
//
//                 Toggle Theme
//             </button>
//         )
//     }
// }
//
// Content.contextType = ThemeContext;
//
// // function Content() {
// //     return (
// //         <div>
// //             <ThemeTogglerButton />
// //         </div>
// //     );
// // }
//
// ReactDOM.render(<App />, document.getElementById('root'));


// 错误边界

// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
//
//     static getDerivedStateFromError(error) {
//         // 更新 state 使下一次渲染能够显示降级后的 UI
//         return { hasError: true };
//     }
//
//     componentDidCatch(error, errorInfo) {
//         // 你同样可以将错误日志上报给服务器
//         console.log('componentDidCatch', error, errorInfo);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             // 你可以自定义降级后的 UI 并渲染
//             return <h1>Something went wrong.</h1>;
//         }
//
//         return this.props.children;
//     }
// }
//
// const App = () => {
//     const ctx = (
//         <h1>This is ErrorBoundary</h1>
//     );
//
//     return (
//         <ErrorBoundary>
//             { ctx }
//         </ErrorBoundary>
//     )
// };
//
// ReactDOM.render(<App />, document.getElementById('root'));

// Refs转发

// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//         {props.children}
//     </button>
// ));
//
// // 你可以直接获取 DOM button 的 ref：
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;

// fragments

// function Glossary(props) {
//     return (
//         <dl>
//             {props.items.map(item => (
//                 // 没有`key`，React 会发出一个关键警告
//                 <React.Fragment key={item.id}>
//                     <dt>{item.term}</dt>
//                     <dd>{item.description}</dd>
//                 </React.Fragment>
//             ))}
//         </dl>
//     );
// }
//
// const arr = [{
//     id: 1,
//     term: 'daoer',
//     description: 'name'
// }, {
//     id: 2,
//     term: 'j',
//     description: 'name2'
// }];
//
// ReactDOM.render(<Glossary items={arr}/>, document.getElementById('root'))

// Portals

// 在 DOM 中有两个容器是兄弟级 （siblings）
// const appRoot = document.getElementById('app-root');
// const modalRoot = document.getElementById('modal-root');
//
// class Modal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.el = document.createElement('div');
//     }
//
//     componentDidMount() {
//         // 在 Modal 的所有子元素被挂载后，
//         // 这个 portal 元素会被嵌入到 DOM 树中，
//         // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
//         // 如果要求子组件在挂载时可以立刻接入 DOM 树，
//         // 例如衡量一个 DOM 节点，
//         // 或者在后代节点中使用 ‘autoFocus’，
//         // 则需添加 state 到 Modal 中，
//         // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
//         modalRoot.appendChild(this.el);
//     }
//
//     componentWillUnmount() {
//         modalRoot.removeChild(this.el);
//     }
//
//     render() {
//         return ReactDOM.createPortal(
//             this.props.children,
//             this.el
//         );
//     }
// }
//
// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {clicks: 0};
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         // 当子元素里的按钮被点击时，
//         // 这个将会被触发更新父元素的 state，
//         // 即使这个按钮在 DOM 中不是直接关联的后代
//         this.setState(state => ({
//             clicks: state.clicks + 1
//         }));
//     }
//
//     callback(...rest) {
//         console.log(rest);
//     }
//
//     render() {
//         return (
//             <div onClick={this.handleClick}>
//                 <Profiler id="Number" onRender={this.callback}>
//                     <p>Number of clicks: {this.state.clicks}</p>
//                 </Profiler>
//                 <p>
//                     Open up the browser DevTools
//                     to observe that the button
//                     is not a child of the div
//                     with the onClick handler.
//                 </p>
//                 <Modal>
//                     <Child />
//                 </Modal>
//             </div>
//         );
//     }
// }
//
// function Child() {
//     // 这个按钮的点击事件会冒泡到父元素
//     // 因为这里没有定义 'onClick' 属性
//     return (
//         <div className="modal">
//             <button>Click</button>
//         </div>
//     );
// }
//
// ReactDOM.render(<Parent />, appRoot);

// 不使用ES6

// var SetIntervalMixin = {
//     componentWillMount: function() {
//         this.intervals = [];
//     },
//     setInterval: function() {
//         this.intervals.push(setInterval.apply(null, arguments));
//     },
//     componentWillUnmount: function() {
//         this.intervals.forEach(clearInterval);
//     }
// };
//
// var createReactClass = require('create-react-class');
//
// var TickTock = createReactClass({
//     mixins: [SetIntervalMixin], // 使用 mixin
//     getInitialState: function() {
//         return {seconds: 0};
//     },
//     componentDidMount: function() {
//         this.setInterval(this.tick, 1000); // 调用 mixin 上的方法
//     },
//     tick: function() {
//         this.setState({seconds: this.state.seconds + 1});
//     },
//     render: function() {
//         return (
//             <p>
//                 React has been running for {this.state.seconds} seconds.
//             </p>
//         );
//     }
// });

// ReactDOM.render(
//     <TickTock />,
//     document.getElementById('root')
// );

// 不适用jsx

// class Hello extends React.Component {
//     render() {
//         return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
// }
//
// ReactDOM.render(
//     React.createElement(Hello, {toWhat: 'World'}, null),
//     document.getElementById('root')
// );

// Refs 和 Dom

// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         // 创建一个 ref 来存储 textInput 的 DOM 元素
//         this.textInput = React.createRef();
//         this.focusTextInput = this.focusTextInput.bind(this);
//     }
//
//     focusTextInput() {
//         // 直接使用原生 API 使 text 输入框获得焦点
//         // 注意：我们通过 "current" 来访问 DOM 节点
//         this.textInput.current.focus();
//     }
//
//     render() {
//         // 告诉 React 我们想把 <input> ref 关联到
//         // 构造器里创建的 `textInput` 上
//         return (
//             <div>
//                 <input
//                     type="text"
//                     ref={this.textInput} />
//                 <input
//                     type="button"
//                     value="Focus the text input"
//                     onClick={this.focusTextInput}
//                 />
//             </div>
//         );
//     }
// }
//
// class AutoFocusTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.textInput = React.createRef();
//     }
//
//     componentDidMount() {
//         this.textInput.current.focusTextInput();
//     }
//
//     render() {
//         return (
//             <CustomTextInput ref={this.textInput} />
//         );
//     }
// }
//
// ReactDOM.render(
//     <AutoFocusTextInput />,
//     document.getElementById('root')
// );

// API

// class Hello extends React.Component {
//     render() {
//         console.log(React.Children.toArray(this.props.children))
//         React.Children.map(this.props.children, (c, idx) => console.log(c, idx));
//         return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
// }
//
// const fn = () => {
//     return <div>haha</div>
// }
//
// console.log(React.isValidElement(Hello));
// console.log(React.isValidElement(fn()));
//
// ReactDOM.render(
//     React.createElement(Hello, {style: {color: 'red'}}, <Hello />, 'hahaha' ),
//     document.getElementById('root')
// );


// import {ThemeContext, themes} from './components/theme-context';
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log('constructor')
//
//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         };
//
//         // State 也包含了更新函数，因此它会被传递进 context provider。
//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         };
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     static getDerivedStateFromProps(...rest) {
//         console.log('getDerivedStateFromProps()', ...rest);
//     }
//
//     render() {
//         console.log('render')
//         // 整个 state 都被传递进 provider
//         return (
//             <ThemeContext.Provider value={this.state}>
//                 <Content />
//             </ThemeContext.Provider>
//         );
//     }
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         console.log('shouldComponentUpdate')
//         return true;
//     }
//
//     getSnapshotBeforeUpdate(...rest) {
//         console.log('getSnapshotBeforeUpdate()', ...rest);
//     }
//
//     componentDidUpdate() {
//         console.log('componenetDidUpdate');
//     }
// }
//
// class Content extends React.Component {
//     render() {
//         const { theme, toggleTheme } = this.context;
//
//         return (
//             <button          onClick={toggleTheme}
//                              style={{backgroundColor: theme.background}}>
//
//                 Toggle Theme
//             </button>
//         )
//     }
// }
//
// Content.contextType = ThemeContext;
//
// ReactDOM.render(<App />, document.getElementById('root'));

class World extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('World component update!!!');
    }

    render() {
        return <span>{this.props.suffix}</span>
    }
}

class Hello extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            suffix: 'daoerche'
        }

        setTimeout(() => {
            this.setState({
               suffix: 'jianjian'
            });
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const dom = document.getElementById('daoerche');
        console.log('getSnapshotBeforeUpdate', dom.innerHTML);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Hello components update!!!', prevState, this.state);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should component update');
        if (nextState.suffix === 'jianjian') return true;
    }

    render() {
        return (
            <h1 id='daoerche'>Hello <World suffix={this.state.suffix} /></h1>
        )
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Hello getDerivedStateFromProps', props, state);
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
