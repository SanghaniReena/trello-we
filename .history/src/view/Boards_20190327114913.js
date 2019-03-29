import React, { Component } from 'react';
import NavbarInside from "../view/NavbarInside"
import * as boadAction from "../action/BaordsAction"

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
        boardData: state.boards
    }
}
const mapDispatchToProps = (dispatch) =>({
    action:{
      boardAction:bindActionCreators(boardAction,dispatch)
    }
  })
  export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);
export default Boards;