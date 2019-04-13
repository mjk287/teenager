import React from "react";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirmation: "",
    name:"",
    role:"",
    gender:""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  };

  render() {
    return (
      <form onSubmit={(e) => this.props.signupSubmitHandler(e, this.state)}>
        <input required
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <select required
          value={this.state.gender}
          onChange={this.changeHandler}
          name="gender">
          <option value="" disabled selected>Gender</option>
           <option value="Male" >Male</option>
           <option value="Female" >Female</option>
           <option value="Transgender" >Transgender</option>
           <option value="Non-Binary" >Non-Binary</option>
           <option value="Other" >Other</option>
         </select>

         <select required
           value={this.state.role}
           onChange={this.changeHandler}
           name="role">
           <option value="" disabled selected>Role</option>
            <option value="Student" >Student</option>
            <option value="Counselor" >Counselor</option>
          </select>

        <input required
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <input required
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <input required
          name="passwordConfirmation"
          type="password"
          placeholder="Password"
          value={this.state.passwordConfirmation}
          onChange={this.changeHandler}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
