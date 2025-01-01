import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
   return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          Go Food
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/createuser">Signup</Link>
          </li>
        </div>
      </div>
    </nav>
    <div>
    </div>
  </div>
  
  
  )
}
