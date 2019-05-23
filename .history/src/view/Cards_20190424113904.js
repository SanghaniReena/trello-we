import React, { Component } from 'react';
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import BoardDash from './BoardDash';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Cards extends Component {
    state = {
        open: false
      };
      componentWillUnmount() {
        const { history } = this.props;
        const iduser = localStorage.getItem("iduser")
        this.props.action.teamAction.FetchTeam(iduser)
    
        this.props.action.boardAction.FetchBoard(iduser, history)
        const idboards = this.props.location.pathname.slice(7);
        this.props.action.listAction.FetchList(idboards)
        this.props.action.teamboardAction.FetchiBoard(iduser, idboards)
        // this.props.action.teamAction.FetchTeam(iduser, idboards)
    
      }
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const { open } = this.state;
        return (
          <div style={styles}>
            <BoardDash></BoardDash>
            <button onClick={this.onOpenModal}>Open modal</button>
            <Modal open={open} onClose={this.onCloseModal} center>
              <h2>Simple centered modal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                hendrerit risus, sed porttitor quam.
              </p>
            </Modal>
          </div>
        );
    }
}

export default Cards;