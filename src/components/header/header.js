import React from "react";
import './header.css'

const Header = ({ numItems, total }) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Book store</a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <button className="btn btn-primary" >My cart: {numItems} items (${total})</button>
      </div>
    </nav>
  </div>
)

export default Header;