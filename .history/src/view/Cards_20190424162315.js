import "./Cards.css"

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
      
      let singleCard=[]
        if(this.props.cardData.length>0 ){
            singleCard=this.props.cardData.filter((cards)=>{

            return cards.idcards===this.props.idcards
        })
       }
       let singlelist=[]
       if(singleCard.length>0){
        if(this.props.listData.length>0 ){
            singlelist=this.props.listData.filter((lists)=>{
            return lists.idlist===singleCard[0].idlists
        })
       }}
       console.log("single list",singlelist)
        return (
            
                <Modal  open={this.props.open} onClose={this.props.onClose} idcards={this.props.idcards} center>
               
                    <div className="cmMainDiv" >
                        <div className="cmTitle" >{(singleCard.length>0)?singleCard[0].cTitle:""}</div>
                        <div className="cmsubFont">in list <a className="cmSubTitle" style={{ textDecoration: "underline"}}>
                    { (singlelist.length>0)? singlelist[0].lName:"undefine"}</a></div>
                   <div>
                        <div className="cmTitle" >Description</div>
                        <label   type="text"><div className="cmAddDesc"> Add a more detailed description…</div></label>
                    </div>
                    <div>
                        <div className="cmTitle" >Add Comment</div>
                        <form>
                        <div className="commDiv"><textarea type="text" placeholder="Write a comment…" style={{borderColor: "lightgrey" ,minWidth:"500px",minHeight:"60px"}}/></div>
                        <button style={{backgroundColor: "#5aac44",boxShadow:"0 1px 0 0 #3f6f21",border:"none",color: "#fff",fontWeight:"bold",borderRadius:"2%"}}>save</button>
                        </form>
                    </div>
                    </div>
                </Modal>
            
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