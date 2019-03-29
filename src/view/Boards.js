import "../view/Boards.css"

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bTitle: "",
      boards: []
    };
  
  }
  componentDidMount() {
    this.props.action.boardAction.FetchBoard()
  }

  handleOnclickCard=(id)=>{
         console.log("id" ,id)
  }
  
  render() {
    let boardData=""
    boardData=this.props.boardData.map((boardData, key) => {
      return (
        
        <div className="col-sm-4" style={{ padding: "7px", width: "100%" }} key={key}>
          <Card className="card1" onClick={() => this.handleOnclickCard(boardData.idboards)} body outline color="secondary" style={{ width: "80%", backgroundColor: "lightcyan" }} >
            <CardTitle style={{ fontWeight: " bolder", fontSize: "larger" }}>{boardData.bTitle}</CardTitle>
          </Card>
        </div>

      )
    })
    return (

      <div>
        <NavbarInside></NavbarInside>
        <center>
          <div ><h4 style={{ padding: "15px", color: "darkcyan", fontWeight: " bolder", paddingBlockStart: "15px" }}>Personal Boards</h4></div>
          <div className="row" style={{ padding: "15px", margin: "auto", width: "100%" }}>
          {boardData}
             </div>
        </center>
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
export default connect(mapStateToProps, mapDispatchToProps)(Boards);
