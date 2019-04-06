import "../view/Boards.css"

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Card, CardTitle } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      bTitle: "",
      boards: [],
      isOpenM: false,
      
    };
  }
  handleOnChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }
  toggleModal() {
    this.setState({
      isOpenM: !this.state.isOpenM
    });
  }
  componentDidMount() {
    const iduser=localStorage.getItem("iduser")
    this.props.action.boardAction.FetchBoard(iduser)
    
  }

  handleOnclickCard=(id)=>{
    
    const {history}=this.props;
   this.props.history.push("/board/"+id)
        
  }
  handleCreateBoardEvent = () => {

    const idusers = localStorage.getItem("iduser")
    this.toggleModal();
    const bTitle = {
      iduser: idusers,
      bTitle: this.state.bTitle
    }
    this.props.action.boardAction.AddBoard(bTitle)

  }
  
  render() {
    let boardData=""
    boardData=this.props.boardData.map((boardData, key) => {
      return (
         <div className="col-sm-4" style={{ padding: "7px", width: "100%" ,marginLeft:"1%",WebkitFlex: "0 0 33.333333%",maxWidth:"23.333333%"}} key={key}>
         <Card className="card1" onClick={() => this.handleOnclickCard(boardData.idboards)} body outline color="secondary" style={{ width: "90%", backgroundColor: "white" ,border: "none",borderRadius:" 6%"}} >
            <CardTitle style={{ fontWeight: " bolder", fontSize: "larger" }}>{boardData.bTitle}</CardTitle>
          </Card>
        </div>

      )
    })
    return (

      <div >
        <NavbarInside></NavbarInside>
        <Modal isOpen={this.state.isOpenM} toggle={this.toggleModal}>
            <ModalBody>
              <ModalHeader toggle={this.toggleModal}>Create board</ModalHeader>
              <Form>
                <FormGroup>
                  <Input type="text" name="bTitle" id="bTitle" placeholder="Add Board Title" onChange={(e) => this.handleOnChange("bTitle", e)} />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleCreateBoardEvent.bind(this)}>Create</Button>{' '}
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        <center>
          <div style={{ padding: "15px", margin: "4% 4% auto auto",float:"right" ,width: "75%",backgroundColor: "#F5F5F5"}}>
          <h4 style={{ padding: "10px", color: "#026AA7", fontWeight: " bolder", paddingBlockStart: "15px" ,float: "left",marginLeft: "19px",marginBottom: "-1.5rem"}}>
          Personal Boards</h4></div>
          <div className="row" style={{ padding: "15px", margin: "auto",float:"right" ,width: "75%",backgroundColor: "#F5F5F5",marginRight:"4%"}}>
          {boardData}
          <div className="col-sm-4" style={{ padding: "7px", width: "100%" ,marginLeft:"1%",WebkitFlex: "0 0 33.333333%",maxWidth:"23.333333%"}}>
         <Card className="card1" onClick={this.toggleModal} body outline color="secondary" style={{ width: "90%", backgroundColor: "white" ,border: "none",borderRadius:" 6%"}} >
            <CardTitle style={{  fontSize: "larger" }}>Create new board..</CardTitle>
          </Card>
        </div>
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
