const {useEffect} = require("react");
const {useRef} = require("react");
const {useState} = require("react");

function GetPrevStatesAndProps() {
    const [count, setCount] = useState(0);

    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;

    return <h1><button onClick={() => setCount(count => count + 1)}>add</button>Now: {count}, before: {prevCount}</h1>;
}

export default GetPrevStatesAndProps;
