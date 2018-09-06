import React, { Component } from "react";
import { Login } from "./Login";
import TodoApp from "./TodoApp";

class App extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = event => {
    const logEmail = this.state.email;
    const logPassword = this.state.password;
    if (
      logEmail === localStorage.getItem("email") &&
      logPassword === localStorage.getItem("password")
    ) {
      this.setState({ isLoggedIn: true });
      localStorage.setItem("isLoggedIn", true);
    }
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  login = () => (
    <Login
      handleEmailChange={this.handleEmailChange}
      handlePasswordChange={this.handlePasswordChange}
      email={this.props.email}
      password={this.props.password}
      handleLogin={this.handleLogin}
    />
  );
  app = () => <TodoApp />;

  render() {
    if (!JSON.parse(localStorage.getItem("isLoggedIn"))) {
      return this.login();
    } else {
      return this.app();
    }
  }
}

export default App;
