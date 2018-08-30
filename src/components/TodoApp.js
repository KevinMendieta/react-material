import React, { Component } from "react";
import logo from "../logo.svg";
import "../css/App.css";
import { TodoList } from "./TodoList";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import TodoInput from "./TodoInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "", priority: 0, dueDate: moment() };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TODO React App</h1>
        </header>

        <div className="App-body">
          <br />
          <TodoInput
            handleTextChange={this.handleTextChange}
            handlePriorityChange={this.handlePriorityChange}
            handleDateChange={this.handleDateChange}
            handleSubmit={this.handleSubmit}
            state={this.state}
          />
          <br />
          <br />
          <TodoList todoList={this.state.items} />
        </div>
      </div>
    );
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handlePriorityChange(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleDateChange(event) {
    console.log(event.target.value);
    this.setState({
      dueDate: event.target.value
    });
  }

  handleSubmit(e) {
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
  }
}

export default App;
