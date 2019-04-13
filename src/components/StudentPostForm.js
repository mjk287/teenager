import React, { Component } from 'react';

class StudentPostForm extends Component {

  state = {
    name: '',
    title: '',
    content: '',
    active: true,
    asigned: false
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  onSubmitPost = (e) => {
    e.preventDefault()
  }

  postStudentFormApi = () => {

  }

  render() {
    return (
      <div className="student-post-form">
        <ul>
          <form onSubmit={(e) => this.onSubmitPost(e)} onChange={(e) => this.onChangeInput(e)}>
            <li>Name: <input type="text" name="name" value={this.state.name} /></li>
            <li>Title: <input type="text" name="title" value={this.state.title} /></li>
            Content: <li><textarea name="content" value={this.state.content} /></li>
            <li><input type="text" name="active" value={this.state.active} /></li>
            <li><input type="text" name="asigned" value={this.state.asigned} /></li>
            <li><input type="submit" name="Submit"/></li>
          </form>
        </ul>
      </div>
    );
  }
}

export default StudentPostForm;
