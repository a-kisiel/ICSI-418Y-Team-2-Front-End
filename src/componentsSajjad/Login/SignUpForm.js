import React, { Component } from "react";

import "./LogIn.css";

class SignUpForm extends Component {
  render() {
    var changePanle = this.props.changePanle;
    return (
      <ul className="inner-center" id="signup-container">
        <li className="li-top">
          <button
            className="tab-button "
            id="btn_login_page"
            onClick={() => changePanle("login")}
          >
            LOG IN
          </button>
          <button
            className="tab-button tab_avtive"
            id="btn_signup_page"
            onClick={() => changePanle("signup")}
          >
            SIGN UP
          </button>
        </li>
        <form action="" method="POST">
          <li className="form-headding">Sign Up</li>
          <li>
            <input
              className="input-signup input-name"
              name="fname"
              type="text"
              placeholder="First Name"
              required
            />
            <input
              className="input-signup input-name"
              name="lname"
              type="text"
              placeholder="Last Name"
              required
            />
          </li>
          <li>
            <input
              className="input-signup"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </li>
          <li>
            <input
              className="input-signup"
              type="password"
              name="pwd"
              placeholder="Password"
              required
              id="pwd"
            />
          </li>
          <li>
            <input
              className="input-signup"
              type="password"
              placeholder="Confirm Password"
              required
              id="con_pwd"
              name="con_pwd"
            />
          </li>
          <li className="li-bottom-signup">
            <input
              className="btn-submit-up "
              type="submit"
              value="Sign Up"
              name="submit_up"
            />
          </li>
        </form>
      </ul>
    );
  }
}

export default SignUpForm;
