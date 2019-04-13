
import React from "react";
import { Redirect } from "react-router-dom";
class Home extends React.Component {
  render(){
    console.log(this.props.user);

    return (
      <div>
        {Object.keys(this.props.user).length > 0 ? (
          <h1>Home</h1>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    )
  }
};

export default Home;
