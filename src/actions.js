import {CHANGE, CHANGE_BACK} from './actionTypes';

export const change = function change() {
    return {type: CHANGE}
};

export const changeBack = function changeBack() {
    return {type: CHANGE_BACK}
};

