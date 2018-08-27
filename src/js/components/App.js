import React, { Component } from 'react';
import Params from './Params';
import {ButtonGen} from './ButtonGen';
import {CurrentPsw} from './CurrentPsw';
import {HistoryPsw} from './HistoryPsw';
import '../../scss/components/App.scss';


export default class App extends Component {
    render() {
        return (
            <div className = 'app'>
                <div className= 'header'> Password Creator </div>
                <Params />
                <ButtonGen />
                <CurrentPsw />
                <HistoryPsw />
            </div>
        )
    }
}
