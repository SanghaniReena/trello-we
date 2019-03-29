import React, { Component } from 'react';
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';


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
                <div>
                    <Button id="PopoverFocus" type="button" style={{ float: "right" , margin:"1%"}}>
                    +
                    </Button>
                    {' '}
                    <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                    <PopoverHeader>Create Board </PopoverHeader>
                    <PopoverBody >A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</PopoverBody>
                    </UncontrolledPopover>
                    
                    </div>
            </div>
        );
    }
}

export default NavbarInside;