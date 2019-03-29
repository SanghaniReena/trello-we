import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BaordsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
    componentDidMount(){
       this.props.action.boardAction.FetchBoard(1)
    }
    render() {
        return (
            <div>
                <NavbarInside></NavbarInside>
               {/* <p>{this.props.boardData.bTitle}</p> */}
                
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
