import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ numItems, total }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Book store</Link>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" >Home <span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        <Link to="/cart/" className="btn btn-primary" >My cart: {numItems} items (${total})</Link>
      </div>
    </nav>
  </div>
)

export default Header;