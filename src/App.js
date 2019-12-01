import React from 'react';
import './App.css';
import Home from './components/home';
import AddStock from './components/addStock';
import View from './components/view';
import About from './components/about';
import Navbar from 'react-bootstrap/Navbar';
import Update from './components/update';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar id="myNav" bg="primary" variant="dark" >
            <Nav className="navBar">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/addStock">Add Stock</Nav.Link>
              <Nav.Link href="/view">View</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addStock" component={AddStock} />
            <Route path="/update/:id" component={Update} />
            <Route path="/about" component={About} />
            <Route path="/view" component={View} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
