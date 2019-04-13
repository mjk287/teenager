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
      [e.target.placeholder]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if(this.state.password === this.state.passwordConfirmation)
    {
      this.props.submitHandler(this.state);
      this.setState({
        email: "",
        password: "",
        passwordConfirmation: "",
        name:"",
        role:"",
        gender:""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input required
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <select required
          value={this.state.gender}
          onChange={this.changeHandler}
          name="house">
          <option value="" >Select Your Gender</option>
           <option value="Male" >Male</option>
           <option value="Female" >Female</option>
           <option value="Transgender" >Transgender</option>
           <option value="Non-Binary" >Non-Binary</option>
           <option value="Other" >Other</option>
         </select>

         <select required
           value={this.state.role}
           onChange={this.changeHandler}
           name="house">
            <option value="" >Select Your Role</option>
            <option value="Male" >Student</option>
            <option value="Counselor" >Counselor</option>
          </select>

        <input required
          type="text"
          placeholder="email"
          value={this.state.email}
          onChange={this.changeHandler}
        />
        <input required
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <input required
          type="password"
          placeholder="password"
          value={this.state.passwordConfirmation}
          onChange={this.changeHandler}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
