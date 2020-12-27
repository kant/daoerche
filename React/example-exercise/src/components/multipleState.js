const {useState} = require("react");
const {useEffect} = require("react");

const useMouseMovePosition = () => {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    useEffect(() => {
        function handleWindowMouseMove(e) {
            setPosition({ left: e.pageX, top: e.pageY });
        }
        // 注意：这是个简化版的实现
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => window.removeEventListener('mousemove', handleWindowMouseMove);
    }, []);
    return position;
}

const MultipleState = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });
    const position = useMouseMovePosition();

    return (
        <div>
            <h2>position</h2>
            <p>{JSON.stringify(position, null, 4)}</p>
            <h2>size</h2>
            <p>{JSON.stringify(size, null, 4)}</p>
        </div>
    )
}

export default MultipleState;
