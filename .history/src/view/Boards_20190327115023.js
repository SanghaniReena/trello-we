import React, { Component } from 'react';
import * as boardAction from "../action/BaordsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
    render() {
        return (
            <div>
                <NavbarInside></NavbarInside>
                <p>{this.props.boardData.bTitle}</p>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boardData: state.boards
    }
}
const mapDispatchToProps = (dispatch) =>({
    action:{
      boardAction:bindActionCreators(boardAction,dispatch)
    }
  })
export default connect(mapStateToProps,mapDispatchToProps)(Boards);
