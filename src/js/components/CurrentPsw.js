import React from "react";
import '../../scss/components/CurrentPsw.scss';
import {store} from '../store';

export let CurrentPsw = () => <div className= 'currentPswShow'>{store.getState().current}</div>;