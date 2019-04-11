import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import { Form, FormGroup, Input } from "reactstrap"
import Navbd from './Navbd';

class BoardDash extends Component {

  componentWillMount() {
    const { history } = this.props;
    const iduser = localStorage.getItem("iduser")
    this.props.action.boardAction.FetchBoard(iduser, history)

  }
  render() {

    console.log("ddsds", this.props.boardData);
    const id = this.props.location.pathname.slice(7);
    console.log("props..", id)
    let data = "";
    if (this.props.boardData && this.props.boardData.length > 0) {
      data = this.props.boardData.filter((board) => {
        return board.idboards === parseInt(id, 10);
      })
    }
    return (
      <div>
        <Navbd></Navbd>

        <div style={{ padding: "1%" }}>
          <h5 style={{ textAlign: "left" }}>Board {(data) ? data[0].bTitle : null}</h5>
          <div style={{ width: "70%", float: "left" }}>
            <Form>
              <FormGroup>
                <Input type="text" name="tName" id="tName" style={{ width: "30%", float: "left" }} placeholder="Add a list" />
              </FormGroup>
            </Form>
          </div>
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