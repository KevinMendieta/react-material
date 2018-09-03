import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./Login";
import TodoApp from "./TodoApp";

localStorage.setItem("email", "test@mail.com");
localStorage.setItem("password", "123");
localStorage.setItem("isLoggedIn", false);

class App extends Component {
  state = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
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
      console.log("loged");
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
    if (!this.state.isLoggedIn) {
      return (
        <Router>
          <div>
            <div>
              <Route exact path="/" component={this.login} />
            </div>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div>
            <div>
              <Route exact path="/" component={this.app} />
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default App;
