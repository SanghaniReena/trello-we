import React, { Component } from 'react';


class NavbarInside extends Component {
    render() {
        return (
            <div>
               <Navbar color="light" light expand="md">
                <NavbarBrand href="/">TRELLO</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem  tag={Route} >  
                <Button  tag={Link} to="/login">LogIn</Button>
                </NavItem>&nbsp;
                <NavItem>  
                <Button tag={Link} to="/signup"  >SignUp</Button>
                </NavItem>
              </Nav>
              </Navbar>
            </div>
        );
    }
}

export default NavbarInside;