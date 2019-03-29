import React, { Component } from 'react';
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
    render() {
        return (
            <div>
                <NavbarInside></NavbarInside>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boardData: state.Boards
    }
}
export default Boards;