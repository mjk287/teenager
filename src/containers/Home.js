<<<<<<< HEAD
import React from 'react'
=======
import React from "react";
import { Redirect } from "react-router-dom";

const Home = props => {
  console.log(props.user);
  return (
    <div>
      {Object.keys(props.user).length > 0 ? (
        <h1>Home</h1>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
>>>>>>> f11fbfc7c56901464318a2cfd37e8376259321ed
