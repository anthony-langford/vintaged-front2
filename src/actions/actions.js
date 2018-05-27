import {CHANGE, CHANGE_BACK, FETCH_VINTAGES} from '../actionTypes';

export const change = function change() {
    return {type: CHANGE}
};

export const changeBack = function changeBack() {
    return {type: CHANGE_BACK}
};

export const fetchVintages = function fetchVintages(list) {
    return {type: FETCH_VINTAGES, list: list}
};




