const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

// action is an object with a type property.
// action creater - is a function that returns a action

const BUY_CAKE ='BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake(){
    return{
            type : BUY_CAKE,
            info: 'first redux action'
        }
}

function buyIceCream(){
    return{
            type : BUY_ICECREAM,
            info: 'second redux action'
        }
}


// when app starts initaila state will be passed into the
// previousState of the reducer.
const initialIceCreamState ={
    numOfIceCreams: 20
}

const intialCakeState={
    numOfcakes : 10
}

// reducer /////// this has two reducers.
// (previousState, action) => newState
// NOTE: we are not mutating the state object , we are returning a new object.
// reducer pure function that returns state and actions
const cakeReducer =(state = intialCakeState, action)=>{
    // return the new state based on current state and action 
    switch(action.type){
        case BUY_CAKE : return {
            // first asking the reducer to first make a copy of the reducer. immutability
            ...state,
            numOfcakes : state.numOfcakes - 1
        }
      
        default: return state
    }
}

const iceCreamReducer =(state = initialIceCreamState, action)=>{
    
    switch(action.type){
       
        case BUY_ICECREAM : return {
            // first asking the reducer to first make a copy of the reducer. immutability
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default: return state
    }
}

// rootreducer used to combine two reducers into one before 
// sending to store.
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
// Store///

const store = createStore(rootReducer);
console.log('initial state', store.getState());
// listener , anytime state updates we log to the console.
const unsubscribe = store.subscribe(()=> console.log('updated state', store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()