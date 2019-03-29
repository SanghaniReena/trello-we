import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardTitle } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import NavbarInside from "../view/NavbarInside"


class Boards extends Component {
    componentDidMount(){
       this.props.action.boardAction.FetchBoard()
      
    }
    render() {
     
        return (
            <div>
            <NavbarInside></NavbarInside>
            <center>
            <div class="row" style={{padding:"15px"}}>
                {this.props.boardData.map((boardData,key)=>{
                return (
                    <div class="col-sm-4" style={{padding:"5px"}} >
                    <Card body outline color="secondary" ro>
                    <CardTitle>{boardData.bTitle}</CardTitle>
                    <Button>Button</Button>
                    </Card>
                    </div>
                    
            )
            })} </div>
        
        {/* <Table striped  style={{width:'1000px',margin:'10px'}}>
          <thead>
            <tr>
              <th>no</th>
              <th>Board Title</th>
              
            </tr>
          </thead>
          <tbody>
            {this.props.boardData.map((boardData,key)=>{
              return (
                <tr>
              <th scope="row">{key+1}</th>
              <td>{boardData.bTitle}</td>
              
            </tr>
              )
            })}
          </tbody>
        </Table> */}
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
