import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {CHANGE, CHANGE_BACK} from './actionTypes';

export const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    base: baseReducer,
});



function baseReducer(state = {change: 'init'}, action)
{
    switch (action.type) {
        case CHANGE:
            return Object.assign({}, state, {
                change: 'changed'
            });
        case CHANGE_BACK:
            return Object.assign({}, state, {
                change: 'changed Back'
            });
        default:
            return state
    }
}