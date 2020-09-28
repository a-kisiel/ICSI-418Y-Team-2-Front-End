import React, { Component } from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import "./LogIn.css";

class Login extends Component {
  constructor(props) {
    super(props);
    //var changePanle=this.changePanle.bind(this);
    this.state = { form: "login" };
  }
  changePanle(e) {
    //alert('We pass argument from Child to Parent: \n' + e);
    this.setState(
      {
        form: e,
      },
      () => console.log(this.state.form)
    );
    console.log(this.state.form);
  }
  render() {
    var changePanle = this.changePanle;
    // state={isLogin:true}

    return (
      <div className="middle">
        {/* <section className="middle"> */}
        <div
          className="center-block"
          id="center_block"
          style={
            this.state.form === "login"
              ? { height: "350px" }
              : { height: "425px" }
          }
        >
          {this.state.form === "login" ? (
            <LogInForm changePanle={changePanle.bind(this)} />
          ) : (
            <SignUpForm changePanle={changePanle.bind(this)} />
          )}
          {/* <LogInForm }/>
      <SignUpForm changePanle={changePanle.bind(this)}/> */}
        </div>
        {/* </section> */}
      </div>
    );
  }
}

export default Login;
