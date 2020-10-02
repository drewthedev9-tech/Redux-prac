import * as  actions from './actionTypes';
import store from './store';

let lastId = 0;


export default function reducer(state =[], action){
    if(action.type === actions.BUG_ADDED)
    return [
       
        ...state,{
            id: ++lastid,
            description: action.payload.description,
            resolved : false
        }
    ];
    else if (action.type === actions.BUG_REMOVED)
    // return all but the fixed bug
    return state.filter(bug => bug.id !== action.payload.id);

    else if (action.type === actions.BUG_RESOLVED)
        return state.map( bug => bug.id !== action.payload.id ? bug : ...bug, resolved:true );

    return state;
}