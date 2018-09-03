import React, { Component } from "react";
import logo from "../logo.svg";
import "../css/App.css";
import { TodoList } from "./TodoList";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import TodoInput from "./TodoInput";

class TodoApp extends Component {
  state = { items: [], text: "", priority: 0, dueDate: moment() };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>

        <div className="App-body">
          <br />
          <div className="search">
            <div>
              <TodoInput
                handleTextChange={this.handleTextChange}
                handlePriorityChange={this.handlePriorityChange}
                handleDateChange={this.handleDateChange}
                handleSubmit={this.handleSubmit}
                state={this.state}
              />
            </div>
            <br />
            <br />
            <div>
              <TodoList todoList={this.state.items} />
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  }

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handlePriorityChange = e => {
    this.setState({
      priority: e.target.value
    });
  };

  handleDateChange = event => {
    this.setState({
      dueDate: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      !this.state.text.length ||
      !this.state.priority.length ||
      !this.state.dueDate
    )
      return;
    const newItem = {
      text: this.state.text,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: "",
      priority: "",
      dueDate: ""
    }));
  };
}

export default TodoApp;
