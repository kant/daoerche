import React from 'react';
import './App.css';
import {observable, action, autorun, computed} from 'mobx';
import { observer } from "mobx-react";

const appState = observable({
    timer: 0,
    name: 'daoer'
});

const doubleTimer = computed(() => {
    console.log('doubleTimer emit!');
    return appState.timer * 2;
});

const nameTrans = computed(() => {
    console.log('nameTrans emit!');
    return appState.name + 'che';
})

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

autorun(function () {
    if (appState.timer > 10) {
        console.log('timer is > 10:', nameTrans.get());
    }
    console.log(appState.timer, doubleTimer.get());
});

setInterval(action(function tick() {
    if (appState.timer < 3) {
        appState.name = appState.timer + appState.name;
    }
    appState.timer += 1;
}), 1000);

const App = observer(({ appState, doubleTimer }) => {
    const onReset = () => {
        appState.resetTimer();
        console.log('resetTimer complate!');
    }

    const renderTimer = () => {
        return (
            <button onClick={onReset}>
                Seconds passed: {appState.timer}, and double val: {doubleTimer.get()}
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

export default <App appState={appState} doubleTimer={doubleTimer} />;
