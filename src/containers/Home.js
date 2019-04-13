<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
=======
=======

>>>>>>> f395cdee697da5804ff0fd923151e911c1b6bf2e
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
<<<<<<< HEAD
>>>>>>> f11fbfc7c56901464318a2cfd37e8376259321ed
=======
>>>>>>> f395cdee697da5804ff0fd923151e911c1b6bf2e
