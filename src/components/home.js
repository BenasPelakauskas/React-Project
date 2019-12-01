import React from 'react';
import '../App.css';

class Home extends React.Component { // Home Page

  render() {
    return (
      <div className="App">
        <h1>Shop Stock Manager</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <br></br>
        <h2>To start, use the navgiation bar!</h2>
      </div>
    );
  }
}

export default Home;