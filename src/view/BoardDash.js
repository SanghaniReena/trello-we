import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import NavbarInside from "./NavbarInside"


class BoardDash extends Component {
  
  componentWillMount(){
    
     
      const {history}=this.props;
      const iduser=localStorage.getItem("iduser")
     this.props.action.boardAction.FetchBoard(iduser,history)
    
  }
    render() {
      debugger
      console.log("ddsds",this.props.boardData);
      const id= this.props.location.pathname.slice(7);
     console.log("props..",id)
     let data="";
      if(this.props.boardData && this.props.boardData.length>0){
        data=this.props.boardData.filter((board,i)=>{
            return board.idboards === parseInt(id,10);
        })
      }
        return (
            <div>
                <NavbarInside></NavbarInside>
                <div>
                  <h4>{(data)?data[0].bTitle:null}</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      boardData: state.BoardReducer.boards
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    action: {
      boardAction: bindActionCreators(boardAction, dispatch)
    }
  })
  export default connect(mapStateToProps, mapDispatchToProps)(BoardDash)