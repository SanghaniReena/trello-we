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