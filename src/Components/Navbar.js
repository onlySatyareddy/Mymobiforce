import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <div style={{ position: 'sticky' }}>
      <Navbar expand="lg" bg="white" variant="light" style={{ borderBottom: '8px solid white', }}>
        <Container>
          <Navbar.Brand>
            <Nav.Link href='/mymobiforce'  >
              <div >
              <img
                src="https://www.mymobiforce.com/images/logo-default.png"
                alt="Company Logo"
                style={{ maxHeight: '100px', maxWidth: '180px'}}
              />
              </div>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div style={{padding:'10px'}}>
            <div style={{ marginLeft: 'auto',justifyContent:'flex-end'}}>
              <Nav className="ml-auto" style={{  overflow: 'hidden',justifycontent: 'flex-end',color:'black',overflow:'hidden'}}>
                <Nav.Link href="/About" style={{margin:'20px',color:'black'}}>About</Nav.Link>
                <Nav.Link href="/OurPlatform" style={{margin:'20px',color:'black'}}>Our Platform</Nav.Link>
                <Nav.Link href="/service" style={{margin:'20px',color:'black'}}>Service Partner</Nav.Link>
                <Nav.Link href="/Register" style={{margin:'20px',color:'black'}}>Register</Nav.Link>
                <Nav.Link href="/Login" style={{margin:'20px',color:'black'}}>Login</Nav.Link>
                <Nav.Link href="/RequestDemo">
                  <button
                    style={{
                      boxSizing: 'border-box',
                      backgroundColor: '#C92312',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px 0px 10px 0px',
                      paddingLeft: '15px',
                      paddingRight: '15px',
                      marginTop:'5px',
                    }}
                  >
                    Request a Demo
                  </button>
                </Nav.Link>
              </Nav>
            </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;

