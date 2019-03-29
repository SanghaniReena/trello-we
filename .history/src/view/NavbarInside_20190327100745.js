import React, { Component } from 'react';
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


// import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
// import { Link, Route } from "react-router-dom"

class NavbarInside extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>  
               <Button id="PopoverFocus" type="button" style={{ float: "right" , margin:"1%"}} onClick={this.toggle}>+</Button>
          
            
                
            </div>
        );
    }
}

export default NavbarInside;