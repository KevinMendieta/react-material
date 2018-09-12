import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "../css/Login.css";
import Api from "../api";

export class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = event => {
    const logEmail = this.state.email;
    const logPassword = this.state.password;
    Api.login(logEmail, logPassword)
      .then(response => {
        alert(response.data);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("token", response.data.accessToken);
      })
      .catch(error => {
        alert("error", error.data);
      });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App-body">
          <main className="layout">
            <Paper className="paper">
              <Avatar className="avatar">
                <LockIcon />
              </Avatar>
              <Typography variant="headline">Sign in</Typography>
              <form className="form">
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="raised"
                  color="primary"
                  className="submit"
                  onClick={this.handleLogin}
                >
                  Sign in
                </Button>
              </form>
            </Paper>
          </main>
        </div>
      </React.Fragment>
    );
  }
}
