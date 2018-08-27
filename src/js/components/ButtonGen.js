import React from "react";
import '../../scss/components/ButtonGen.scss';
import PasswordGenerator from './PasswordGenerator';
import {store} from '../store';
import {setCurrent, getArr} from '../actions/action.js';

function savePsw() {
    let {length, isLetters, isUpper, isNums, isSymbols} = store.getState();
    let current = new PasswordGenerator(length, isLetters, isUpper, isNums, isSymbols).gen();
    store.dispatch(setCurrent(current));

    addToHistory(current);
}

function addToHistory(current) {
    let pswArr = store.getState().pswArr;
    if (pswArr.length === 5) {
        pswArr.splice(0, 1);
        pswArr = [...pswArr, current];
    } else {
        pswArr = [...pswArr, current];
    }
    store.dispatch(getArr(pswArr));
}

export let ButtonGen = () => <button id = 'gen' onClick={savePsw}> Generate </button>;