import React, {Component} from 'react'
import { Link, withRouter} from "react-router-dom";

class NavBar extends Component {

  render(){
  
    return (
        <div className="ui menu">
        <div className="header left item">
          Mental Health App For Teens
        </div>
        <h1>  </h1>
        <Link to="/home">
            <a className="item">
            <i class="home icon"></i>
              Home
            </a>
        </Link>
        <Link to="/home">
          <a className="item">
          <i class="user icon"></i>
             My Profile
          </a>
        </Link>
        <Link to="/signup">
          <a className="item">
          <i class="sign in alternate icon"></i>
            SignUp
          </a>
        </Link>

        <Link to="/login">
          <a className="item">
          <i class="sign in alternate icon"></i>
            Log In
          </a>
        </Link>
        <Link to="/signup">
          <a className="item">
          <i class="sign in alternate icon"></i>
            SignUp
          </a>
        </Link>

        </div>
    )
  }
}

export default NavBar
