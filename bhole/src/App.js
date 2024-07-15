
import React from 'react';
import './App.css'
import {Container, Navbar, Nav} from 'react-bootstrap'
import ResturantList from './components/ResturantList';
import ResturantDetail from './components/ResturantDetail';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestaurantSerch from './components/RestaurantSerch';
import RestaurantCreate from './components/RestaurantCreate';
import Home from './components/Home';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/update/:id">Update</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
     <Route path="/list"element ={<ResturantList />} />
     <Route path="/create" element ={<RestaurantCreate />} />
     <Route path="/search" element={<RestaurantSerch />} />
     <Route path="/detail" element={<ResturantDetail />} />
     <Route path="/update/:id" element={<RestaurantUpdate />} />
     <Route exact path="/" element={<Home />} />
     </Routes>
     </Router>
    </div>
  );
}


export default App;
