import React, { Component } from "react";
import Icon from "./Icon";
class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount(){
    this.loginUser();
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = () => {
    console.log("clicked");
  }

  render() {
    return (
      <div className="container">
        <Icon />
        <h1 id="title">Moodbeats</h1>
        <form id="login-form" onSubmit={this.loginUser}>
          <div className="form-group">
            <input
              name="email"
              value={this.state.email.trim()}
              onChange={this.inputChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <label className="forget-password">Forget Your Password?</label>
          </div>
          <button type="submit" className="btn btn-primary login-button">
            Login
            </button>
        </form>
        <button  type="submit" className="btn btn-primary login-button">
          Register
        </button>
      </div>
    );
  }
}

export default LoginPage;
