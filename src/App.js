import React, { Component } from 'react'
import './App.css'
import { UserSession } from 'blockstack'
import { appConfig } from './utils/constants'
import Home from './blockstackStuff/home'
import Login from './blockstackStuff/login'

class App extends Component {

 state = {
   userSession: new UserSession( { appConfig } ),
   doctor: null
 }

 componentWillMount() {
   const session = this.state.userSession
   if(!session.isUserSignedIn() && session.isSignInPending()) {
     session.handlePendingSignIn()
     .then((userData) => {
       if(!userData.username) {
         throw new Error('This app requires a username.')
       }
       window.location = `/`
     })
   }
 }

 

 render() {
   return (
     <main role="main">
         {this.state.userSession.isUserSignedIn() ?
           <Home userSession={this.state.userSession} />
         :
           <Login userSession={this.state.userSession}/>
         }
     </main>
   );
 }
}

export default App
