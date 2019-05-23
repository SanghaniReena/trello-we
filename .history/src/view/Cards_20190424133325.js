import React, { Component } from 'react';
import Modal from "react-responsive-modal";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class Cards extends Component {
    // state = {
    //     open: false
    //   };
    
    //   onOpenModal = () => {
    //     this.setState({ open: true });
      
    //   };
    
    //   onCloseModal = () => {
    //     this.setState({ open: false });
    //   };
    render() {
      //  const { open } = this.props;
        return (
          <div style={styles}>
           
            {/* <button onClick={this.onOpenModal}>Open modal</button> */}
            <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
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