import React from 'react';
import { Button } from 'react-bootstrap';
import { House, BoxArrowInRight, PersonPlus, Cart } from 'react-bootstrap-icons';
import './Navbar.css';

function Navbar({Token, Total}) {
  return (
    <nav className="navbar">
     
      <div className="nav-links">
         <h2>Pizzería Mamma Mia</h2>
        {Token ? (
          <>

          <Button variant="outline-warning">
              🔓 Profile
            </Button>
            <Button variant="outline-warning">
              🔒 Logout
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline-warning">
              🔐 Login
            </Button>
            <Button variant="outline-warning">
              🔐 Register
            </Button>
          </>
        )}

        {/* Carrito con total */}
        
      </div>
      <Button className='btn' variant="outline-warning" style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
          <Cart style={{ marginRight: '5px' }} /> ${Total}25.000
        </Button>
            

    </nav>
  )
}

export default Navbar;
