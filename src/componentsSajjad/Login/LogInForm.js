import React, { Component } from "react";

import "./LogIn.css";

class LogInForm extends Component {
  render() {
    var changePanle = this.props.changePanle;
    // function change(a, b) {
    //     console.log(a+b)
    //     // var x =document.getElementById(a);
    //     // var y =document.getElementById(b);
    //     // if(x.style.opacity==0){
    //     //     if(a=='signup-container'){
    //     //         document.getElementById('center_block').style.height ='435px';

    //     //     }
    //     //     else{
    //     //         document.getElementById('center_block').style.height ='370px';

    //     //     }
    //     //     y.setAttribute("style","opacity:0;display:none;padding: 40px 10px 20px 10px;");
    //     //     x.setAttribute("style","opacity:1;display:block;padding: 40px 10px 20px 10px;");}

    // }
    return (
      <ul className="inner-center" id="login-container">
        <li className="li-top">
          <button
            className="tab-button tab_avtive"
            id="btn_login_page"
            onClick={() => changePanle("login")}
          >
            LOG IN
          </button>
          <button
            className="tab-button"
            id="btn_signup_page"
            onClick={() => changePanle("signup")}
          >
            SIGN UP
          </button>
        </li>
        <form method="POST" action="#">
          <li className="form-headding">Log In</li>
          <li>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </li>
          <li>
            <input
              className="input"
              type="password"
              name="pwd"
              placeholder="Password"
              required
            />
          </li>
          <li className="li-bottom">
            <a className="forgot-link" href="">
              Forgot Password?
            </a>
            <input
              className="btn-submit "
              type="submit"
              value="LOG IN"
              name="submit_in"
            />
          </li>
        </form>
      </ul>
    );
  }
}

export default LogInForm;
