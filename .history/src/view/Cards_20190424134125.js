import React, { Component } from 'react';
import Modal from "react-responsive-modal";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class Cards extends Component {
    
    render() {
        return (
          <div style={styles}>
            <Modal open={this.props.open} onClose={this.props.onClose} center>
              <div></div>
            </Modal>
          </div>
        );
    }
}

export default Cards;