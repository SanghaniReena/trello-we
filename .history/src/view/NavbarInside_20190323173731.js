import React, { Component } from 'react';
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';


// import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
// import { Link, Route } from "react-router-dom"

class NavbarInside extends Component {
    render() {
        return (
            <div>   
                <div>
                    <Button id="PopoverFocus" type="button" style={{ float: "right" , margin:"1%"}}>
                    +
                    </Button>
                    {' '}
                    <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                    <PopoverHeader>Focus Trigger</PopoverHeader>
                    <PopoverBody>Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.</PopoverBody>
                    </UncontrolledPopover>
                    
                    </div>
            </div>
        );
    }
}

export default NavbarInside;