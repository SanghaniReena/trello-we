import React, { Component } from 'react';


class Boards extends Component {
    render() {
        return (
            <div>
            <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
            <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
              <Nav>
                <NavItem href="#">Link 1</NavItem>
                <NavItem href="#">Link 2</NavItem>
                <NavItem href="#">Link 3</NavItem>
                <NavItem href="#">Link 4</NavItem>
              </Nav>
            </Sidebar>
        </div>
        );
    }
}

export default Boards;