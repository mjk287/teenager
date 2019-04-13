import React from 'react'

class RoleForm extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.submitHandler}>
        <select name="role">
          <option value="student">Student</option>
          <option value="counselor">Counselor</option>
        </select>

        <input type='submit' value='Pick Role'/>
      </form>
    )
  }
}
