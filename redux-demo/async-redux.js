const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    loadig: false,
    users: [],
    error: ''
}

// action types
const FETCH_USERS_REQUEST = 'FECTH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FECTH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// action creators
const fetchusersRequest = ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users=>{
    return{
        type: FETCH_USERS_REQUEST,
        payload: users
    }
}

const fetchUsersFailure = error=>{
    return{
        type: FETCH_USERS_REQUEST,
        payload: error
    }
}

const reducer =(state= initialState, action)=>{
    // Based o action type we return a new state.
    switch(action.type){
        case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS:
        return{
            loading: false,
            users: acion.payload,
            error:''
        }
        // action.payload is from the action creators.
        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users:[],
                error:action.payload
            }
    }

    
}

const store = createStore(reducer)
