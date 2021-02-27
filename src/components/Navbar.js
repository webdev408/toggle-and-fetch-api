import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-danger bg-dark">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">tSol</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/"><i className="fas fa-home"></i>First</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/person"><i className="fas fa-user-alt"></i>Person</NavLink>
                    </li>
                    <li className="nav-item">
                       <NavLink className="nav-link" to="/contact"><i className="fas fa-envelope"></i> Contact</NavLink>
                    </li>
                </ul>
             </div>
          </div>
        </nav>
       </div>
    )
}

export default Navbar;
