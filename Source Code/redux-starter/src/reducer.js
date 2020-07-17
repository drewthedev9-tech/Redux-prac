let lastId = 0;


function reducer(state =[], action){
    if(action.type === 'bugAdded')
    return [
       
        ...state,{
            id: ++lastid,
            description: action.payload.description,
            resolved : false
        }
    ];
    else if (action.type === 'bugRemoved')
    // return all but the fixed bug
    return state.filter(bug => bug.id !== action.payload.id)

    return state;
}