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
              <div>
                  
              </div>
              <div></div>
            </Modal>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      boardData: state.BoardReducer.boards,
      teamData: state.TeamReducer.teams,
      listData: state.ListsReducer.lists,
      teamBoardData: state.TeamBoardsReducer.teamboards,
      cardData: state.CardsReducer.cards
  
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    action: {
      boardAction: bindActionCreators(boardAction, dispatch),
      teamAction: bindActionCreators(teamAction, dispatch),
      listAction: bindActionCreators(listAction, dispatch),
      teamboardAction: bindActionCreators(teamboardAction, dispatch),
      cardAction: bindActionCreators(cardAction, dispatch)
    }
  })
  export default connect(mapStateToProps, mapDispatchToProps)(Cards);