import React, { Component } from "react";
import "./App.css";
import Home from "./containers/Home";
// import Error from "./components/Error";
// import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Switch, withRouter } from "react-router-dom";

///optinal for now goes on Navbar
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount(){
    if(localStorage.getItem('token')){
      fetch("http://localhost:3000/api/v1/current_user", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
      .then( res => res.json())
      .then(userJSON => {
        this.setState({
          user: userJSON.user
        }, () => {
          this.props.history.push('/home')
        })
      })
    }
  }

  signupSubmitHandler = (e, userInfo) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( userInfo )
    })
      .then(resp => resp.json())
      .then(userData => {
        this.setState({user: userData} , () => {
          localStorage.setItem("token", userData.jwt);
          this.props.history.push("/home");
        });
      });
  };

  loginSubmitHandler = userInfo => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify({ user: userInfo })
    })
      .then(resp => resp.json())
      .then(userData => {
        localStorage.setItem('token', userData.jwt)
        this.setState(
          { user: userData.user },
          () => this.props.history.push("/home")
        )
      });
  };

  handleLogout = () => {
    this.setState({
      user: {}
    })
    localStorage.removeItem("token");
    this.props.history.push("/signup");
  }

  // <Route
  //   path="/rappers"
  //   render={() => <RapContainer user={this.state.user} />}
  // <Navbar handleLogout={this.handleLogout} />

  // />

  render() {
    return (
      <div>
        <ul>

         {this.state.user !== undefined ?
           <>
           <li onClick={(e) => this.handleLogout()}>
             Log Out
           </li>
           </>
           :
            <>
           <Link to="/signup">
             <li>Sign Up</li>
           </Link>
           <Link to="/login">
             <li>Log In</li>
           </Link>
              </>
         }


       </ul>

        <Switch>
          <Route
            path="/signup"
            render={() => <Signup signupSubmitHandler={this.signupSubmitHandler} />}
          />
          <Route
            path="/login"
            render={() => <Login submitHandler={this.loginSubmitHandler} />}
          />
          <Route path="/home" render={() => <Home user={this.state.user} />} />
          <Route path="/"  />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
