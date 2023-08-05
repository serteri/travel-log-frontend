import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import {About} from '../About/AboutUs'
import './Navbar.css'
export function  NavBar (){

    return(
      <nav>
          <div className="navbars">
              <div>
                  <NavLink className='navbar-brands' to="/">Logo</NavLink>
              </div>

              <div>
                  <ul className="navbar_list_items navbar_list">

                      <li className="nav-items "><NavLink className={({isActive}) => isActive ? 'nav-link actives'  : 'nav-link'} to="/">Home</NavLink></li>
                      <li className="nav-items "><NavLink className={({isActive}) => isActive ? 'nav-link actives'  : 'nav-link'} to="/about">About</NavLink></li>
                      <li className="nav-items"><NavLink className={({isActive}) => isActive ? 'nav-link actives'  : 'nav-link'} to="/login">Login</NavLink></li>

                  </ul>
              </div>

          </div>


      </nav>

    )
}

