import React from 'react';
import '../App.css';

class Home extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Shop</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Home;