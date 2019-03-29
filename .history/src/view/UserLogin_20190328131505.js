import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as userAction from "../action/UserRegAction"
import NavbarMain from "../view/NavbarMain"


class UserLogin extends Component {
    state = {
        email: "",
        pw: "",
        isLoggedin:false
      }
      
      handleOnChange=(key,e)=>{
          this.setState({
              [key]:e.target.value
          })
      }
      handleLoginSubmit=(e)=>{
        
            const loginUsers={
            email:this.state.email,
            pw:this.state.pw,
            isLoggedin:true
        }
        this.props.action.userAction.userloginAction(loginUsers)
    }
      
      enterPress(e){
        if (e.key === "Enter") {
            this.props.userData.users(this.state);
        }
      }
    render() {
        
        return (
        <div>
        <NavbarMain></NavbarMain>
        <div className="RegForm">
        <h4 className="Header">Welcome to Trello! Log in to Trello or <Link to="/signup" path="/signup">Create an account</Link></h4>
        <div className="Form" >
        <Form onKeyPress={this.enterPress.bind(this)}>
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email" onChange={(e)=>this.handleOnChange("email",e)} />
                <span style={{ color: "red" }}>{this.state.fieldsErrors.email}</span>

            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="pw" id="pw" placeholder="Enter password" onChange={(e)=>this.handleOnChange("pw",e)} />
                <span style={{ color: "red" }}>{this.state.fieldsErrors.pw}</span>

            </FormGroup>
                <Button tag={Link} to="/boards" onClick={this.handleLoginSubmit.bind(this)} >Log In</Button>
            <FormGroup>
                <Link to="/forgetpw">Forget Password?</Link>
            </FormGroup>
            </Form>
            </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      userData: state.users
    }
  }
 const mapDispatchToProps = (dispatch) =>({
   action:{
     userAction:bindActionCreators(userAction,dispatch)
   }
 })
 export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);