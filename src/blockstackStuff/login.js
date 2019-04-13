import React, { Component } from 'react'
import { UserSession } from 'blockstack'

class Login extends Component {

 signIn = (e) => {
   e.preventDefault()
   this.props.userSession.redirectToSignIn()
 }

 render() {
   return (
     <div className="Landing">
       <div className="form-signin">
         <h1 className="h1 mb-3 font-weight-normal">James is a stud</h1>
         <button
           className="btn btn-lg btn-primary btn-block"
           onClick={this.signIn}>Sign in with Blockstack
         </button>
       </div>
     </div>
   );
 }
}

export default Login
