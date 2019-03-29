import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
    componentDidMount(){
       this.props.action.boardAction.FetchBoard()
      
    }
    render() {
      let boardData=""
        return (
            <div>
                <NavbarInside></NavbarInside>
                
                    { boardData=this.props.boardData.map((boardData,key) =>{
                              return
                               <tr key={key} style={{ textAlign: "center" }} >
                            
                              <td>{boardData.bTitle}&nbsp;</td>
                             
                              </tr>
                    })}
              
               
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        boardData: state.BoardReducer.boards
    }
}
const mapDispatchToProps = (dispatch) =>({
    action:{
        boardAction:bindActionCreators(boardAction,dispatch)
    }
  })
export default connect(mapStateToProps,mapDispatchToProps)(Boards);
