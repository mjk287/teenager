import React from "react";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button>Log In</button>
      </form>
    );
  }
}

export default Login;
