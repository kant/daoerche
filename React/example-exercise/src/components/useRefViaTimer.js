import {useState} from "react";

const {useEffect} = require("react");
const {useRef} = require("react");

function Timer() {
    const intervalRef = useRef();

    const [needRender, updateNeedRender] = useState(false);

    useEffect(() => {
        const id = setInterval(() => {
            // ...
            console.log('useRef 另外一种用法实践')
        }, 1000);
        if (!intervalRef.current) {
            console.log('这是第一次渲染');
        } else {
            console.log('这是后续的更新');
        }
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    setTimeout(() => {
        console.log('intervalRef1', intervalRef);
        console.log('intervalRef2', intervalRef);
        updateNeedRender(true);
    }, 5000)
    console.log('render emit');

    // ...
    return (
        <h2>Timer useRef</h2>
    )
}

export default Timer;

