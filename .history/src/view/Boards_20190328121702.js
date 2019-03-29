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
                <div  ><h4 style={{padddin:"15px"}}>Personal Boards</h4></div>
            <div className="row" style={{padding:"15px", margin:"auto",width:"100%"}}>
                {this.props.boardData.map((boardData,key)=>{
                return (
                    <div className="col-sm-4" style={{padding:"5px",width:"100%"}} i={key} >
                    <Card body outline color="secondary"  style={{width:"80%"}}>
                    <CardTitle style={{fontWeight:" bolder",fontSize: "larger"}}>{boardData.bTitle}</CardTitle>
                    <Button style={{margin:"auto"}}>Go to Board</Button>
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
