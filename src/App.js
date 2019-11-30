import React from 'react';
import './App.css';
import Home from './components/home';
import AddStock from './components/addStock';
import Update from './components/update';
import Navbar from 'react-bootstrap/Navbar';
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
              <Nav.Link href="/update">Update</Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addStock" component={AddStock} />
            <Route path="/update/:id" component={Update} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
