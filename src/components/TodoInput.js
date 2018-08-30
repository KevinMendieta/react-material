import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="todo-form">
        <h3>New TODO</h3>
        <TextField
          label="Todo Name"
          id="margin-none"
          onChange={this.props.handleTextChange}
          value={this.props.state.text}
        />
        <br />
        <br />
        <TextField
          label="Priority"
          id="margin-none"
          type="number"
          onChange={this.props.handlePriorityChange}
          value={this.props.state.priority}
        />
        <br />
        <br />

        <TextField
          id="date"
          label="Due date"
          type="date"
          onChange={this.props.handleDateChange}
          value={this.state.date}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <Button variant="raised" onClick={this.props.handleSubmit}>
          Add #{this.props.state.items.length + 1}
        </Button>
      </form>
    );
  }
}

export default TodoInput;
