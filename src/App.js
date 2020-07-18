import React from 'react';
import Profile from './Profile';
import StatesInFunction from "./StatesInFunction";
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Profile />
        <StatesInFunction />
      </div>
    );
  }
}

export default App;
