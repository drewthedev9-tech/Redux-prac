import React from 'react';
import CakeContainer from './components/cakeContainer.jsx'
// provider to get store to react application
import {Provider} from 'react-redux';
// a;so need the store to be passed as props
import store from './redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  
  );
}

export default App;
