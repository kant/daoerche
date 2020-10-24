import React from 'react';
import './App.css';
import { observable, action, autorun } from 'mobx';
import { observer } from "mobx-react";

const appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

autorun(function () {
    console.log(appState.timer);
})

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

const App = observer(({ appState }) => {
    const onReset = () => {
        appState.resetTimer();
        console.log('resetTimer complate!');
    }

    const renderTimer = () => {
        return (
            <button onClick={onReset}>
                Seconds passed: {appState.timer}
            </button>
        )
    }

    return (
        <div>
            <h2>This is mobx test.</h2>
            { renderTimer() }
        </div>
    )
})

export default <App appState={appState} />;
