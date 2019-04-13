import React from 'react'

const NavBar = (props) => {

// const changeNavBarOptions = () => {
//     if (props.role === 'counselor') {
//         return `${props.name} Profile`
//     } else if (props.role === 'student') {
//         return `${props.name} Profile`
//     }
// }
    return (
        <div className="ui  menu">
        <div className="header left item">
          Mental Health App For Teens
        </div>
  <a className="item">
  <i class="home icon"></i>
    Home
  </a>
  <a className="item">
  <i class="user icon"></i>
     My Profile
  </a>
  <a className="item">
  <i class="sign in alternate icon"></i>
    SignUp
  </a>
</div>
    )

}

export default NavBar
