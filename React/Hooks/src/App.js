import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UseState from "./UseState";
import UseContextApp from "./useContext";
import Counter from "./useReducer";

function useClickCount() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(0);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return [count, setCount];
}

function Example() {
   const [count, setCount] = useClickCount();

   console.log('app.js Example render');

   useEffect(() => {
       const timer = setInterval(() => console.log(count), 2000);
       return () => {
           clearInterval(timer);
       }
   }, [count]);

   return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function App() {
  return (
    <div className="App">
        {Example()}
        {UseState()}
        {UseContextApp()}
        {Counter({initialCount: 5})}
    </div>
  );
}

export default App;
