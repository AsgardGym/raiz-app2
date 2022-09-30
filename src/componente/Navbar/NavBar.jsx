import React from 'react'
import CartWidget from '../Cartwidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>

      <div class="navbar-nav">
        <NavLink class="nav-link active" aria-current="page" to='/'>Home</NavLink>
        <NavLink class="nav-link" to="/categoria/living">Living</NavLink>
        <NavLink class="nav-link" to="/categoria/dormitorio">Dormitorio</NavLink>
                </div>
      <NavLink to='/cart'><CartWidget /></NavLink>
   

  </>
  )
}

export default NavBar