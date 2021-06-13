import React from "react"
import Signup from "./SignUp"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import UserDatabase from './UserDatabase';
import AddUser from './AddUser';
import NotFoundPage from './NotFoundPage';
import 'normalize.css/normalize.css';
import '../styles/styles.css';
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"

function App() {
  return (
    
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
         
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/userdatabase" component={UserDatabase} />
                <PrivateRoute path="/adduser" component={AddUser} />
                <PrivateRoute component={NotFoundPage} />
         
            </Switch>
          </AuthProvider>
        </Router>
      
  )
}

export default App