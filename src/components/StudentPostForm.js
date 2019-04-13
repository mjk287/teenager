import React, { Component } from 'react';
import postAdapter from '../adapters/postAdapter'

class StudentPostForm extends Component {

  state = {
    user_id: 1,
    content: '',
    assign_to: 0
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  onSubmitPost = (e, postObj) => {
    e.preventDefault()
    this.postStudentToApi(postObj)

  }

  // this need to go to PostList
  postStudentToApi = (postObj) => {
    postAdapter.postPost(this.state)
  }

  render() {
    return (
      <div className="student-post-form">
        <ul>
          <form onSubmit={(e) => this.onSubmitPost(e, this.state)} >
            Content: <li><textarea name="content" value={this.state.content} onChange={(e) => this.onChangeInput(e)}/></li>
            <li><input type="submit" name="Submit"/></li>
          </form>
        </ul>
      </div>
    );
  }
}

export default StudentPostForm;
