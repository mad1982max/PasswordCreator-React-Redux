import React from "react";
import '../../scss/components/HistoryPsw.scss';
import {store} from '../store';


export let HistoryPsw = () =>
    <div className= 'historyList'>
        <div className='headerHistory'> Last 5: </div>
        <ul>
            {store.getState().pswArr.map((item, i) => <li key={item.concat(i)}> {item} </li>)}
        </ul>
    </div>;