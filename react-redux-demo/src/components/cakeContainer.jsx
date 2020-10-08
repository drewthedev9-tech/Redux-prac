import React from 'react';
import {connect} from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';

// video ecplanantion - https://www.youtube.com/watch?v=gFZiQnM3Is4&list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK&index=18
// round 6:30min 
const cakeContainer = (props) => {
    return (
        <div>
        <h2>Number of cakes- {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cakes</button>
        </div>
      );
}

// step.1, access state.
// maps the state from reducer to this components props and returns an object
// in this case numOfCakes.
// there are also things called selectors that allow for 
// mapping only specific parts if the state and you can put those into another file 
// as well.
const mapStateToProps = state =>{
    return{
        numOfCakes: state.numOfCakes
    }
}

// step.2 - get action creator maps to props of our component.
// gets redux dispatchment a param and returns an object
// again maps to props of our component so can be used above.
// in our case we just have the one action creator buy Cake
 const mapDispatchToProps = dispatch =>{
     return{
        //  mapping dispatchment to a props called 
        // buy Cake
         buyCake: ()=> dispatch(buyCake())
     }
 }

// step3 - connect function connects our component to the redux store.
export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (cakeContainer);