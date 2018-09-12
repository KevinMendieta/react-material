import React, { Component } from "react";
import { Login } from "./Login";
import TodoApp from "./TodoApp";

class App extends Component {
  login = () => <Login />;
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
