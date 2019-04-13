import React from 'react'
import RoleForm from './RoleForm'

class Home extends React.Component {
  signOut = (e) => {
    e.preventDefault()
    this.props.userSession.signUserOut()
    window.location = '/'
  }

  handleSubmit = (e, doctor) => {
    debugger
  }

  render(){

    return (
      <div>
        <nav>
          <p onClick={this.signOut}>Log Out</p>
        </nav>
        <h1>Home</h1>

      </div>
    )
  }
}

export default Home
