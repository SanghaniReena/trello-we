import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap'
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
                <center>
        <Table striped hidden={ishid} style={{width:'1000px',margin:'100px'}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Commission</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {userAmt.map((u)=>{
              return (
                <tr>
              <th scope="row">{u.id}</th>
              <td>{u.name}</td>
              <td>{u.commission}%</td>
              <td>{u.amount}</td>
            </tr>
              )
            })}
          </tbody>
        </Table>
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
const mapDispatchToProps = (dispatch) =>({
    action:{
        boardAction:bindActionCreators(boardAction,dispatch)
    }
  })
export default connect(mapStateToProps,mapDispatchToProps)(Boards);
