import {Component} from "react";
import React from "react";
import '../../scss/components/Params.scss';
import {store} from '../store';
import {setLength, isLetters, isSymbols, isNums, isUpper} from '../actions/action.js';


export default class Params extends Component {

    onHandlerChange = (e) => {
        let val = e.target.type === 'checkbox'? e.target.checked: e.target.value;
        switch (e.target.name) {
            case 'LENGTH':
                store.dispatch(setLength(val));
                break;
            case 'IS_LETTERS':
                store.dispatch(isLetters(val));
                break;
            case 'IS_UPPER':
                store.dispatch(isUpper(val));
                break;
            case 'IS_NUMS':
                store.dispatch(isNums(val));
                break;
            case 'IS_SYMBOLS':
                store.dispatch(isSymbols(val));
                break;
        }
    };

    render() {
        return (
            <div className= 'params' id = 'params'>
                <div>Parameters:</div>

                <div className= 'box'>
                    <input type = 'number'
                           name= 'LENGTH'
                           min = '3'
                           max = '13'
                           size = '2'
                           onChange={this.onHandlerChange}
                           value={store.getState().length}/>
                    <span>length</span>
                </div>

                <label className= 'box'>
                    <input
                        type = 'checkbox'
                        name= 'IS_LETTERS'
                        onChange={this.onHandlerChange}
                        checked={store.getState().isLetters} />
                    <span className= 'checkboxText'>letters</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'IS_UPPER'
                           onChange={this.onHandlerChange}
                           checked={store.getState().isUpper}/>
                    <span className= 'checkboxText'>uppercase</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'IS_NUMS'
                           onChange={this.onHandlerChange}
                           checked={store.getState().isNums}/>
                    <span className= 'checkboxText'>numbers</span>
                </label>

                <label className= 'box'>
                    <input type = 'checkbox'
                           name= 'IS_SYMBOLS'
                           onChange={this.onHandlerChange}
                           checked={store.getState().isSymbols}/>
                    <span className= 'checkboxText'>symbols</span>
                </label>
            </div>
        )
    }
}