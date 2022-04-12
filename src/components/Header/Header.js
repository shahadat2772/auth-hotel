import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (userData) => {
    setUser(userData);
  });

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>HotelAuth</Navbar.Brand>
        <Nav className="me-auto links">
          <NavLink to={`/home`}>Home</NavLink>
          <NavLink to={`/booked`}>Booked</NavLink>
          {user?.uid ? (
            <button className="logOutBtn" onClick={handleLogOut}>
              LogOut
            </button>
          ) : (
            <NavLink to={`/login`}>Login</NavLink>
          )}
          <NavLink to={`/about`}>About</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
