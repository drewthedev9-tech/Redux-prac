import { BUY_CAKE } from './cakeTypes';


// reducer accepts state and action as params
const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action)=>{
    switch(action.type){
        // if this case is true deduct 1
        case BUY_CAKE: return{
            // always need to keep state immutable
            ...state, 
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

export default cakeReducer;