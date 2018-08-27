import {createStore} from 'redux';
import {reducer} from '../reducers';

const initState = {length: 8, isLetters: true, isUpper: false, isNums: false, isSymbols: false, current: '', pswArr: []};

export const store = createStore(reducer, initState);
