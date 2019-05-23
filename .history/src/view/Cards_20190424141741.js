import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from "react-responsive-modal";
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import * as cardAction from "../action/CardsAction"
import * as listAction from "../action/ListsAction"
import * as teamboardAction from "../action/TeamBoardsAction";
import * as teamAction from "../action/TeamsAction"


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
class Cards extends Component {

    render() {
       const i=0;
        if(this.props.open && i===0){
            const singleCard=this.props.cardData.filter((cards)=>{
                i=1;
            return cards.idcards===this.props.idcards
        })
        console.log("single card data",singleCard)}
        return (
            <div style={styles}>
                <Modal open={this.props.open} onClose={this.props.onClose} idcards={this.props.idcards} center>
                <br></br>
                    <div className="cmMainDiv">
                    <div>
                        {/* {singleCard[0].cTitle} */}

                    </div>
                    <div></div>
                    </div>
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