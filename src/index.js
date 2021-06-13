// import React from 'react';
// import ReactDOM from 'react-dom';
// import UserDatabase from './components/UserDatabase';
// import Dashboard from './components/Dashboard'
// import NotFoundPage from './components/NotFoundPage';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import 'normalize.css/normalize.css';
// import './styles/styles.css';
// import {
//   BrowserRouter,
//   Switch,
// Route,
// } from "react-router-dom";
// import AddUser from './components/AddUser';

// const routes = (
//      <BrowserRouter>
//           <Switch>
//                <Route path="/admin-app" component={Dashboard} exact={true} />
//                <Route path="/userdatabase" component={UserDatabase} />
//                <Route path="/adduser" component={AddUser} />
//                <Route path="/signup" component={SignUp} />
//                <Route path="/login" component={Login}/>
//                <Route component={NotFoundPage} />
//           </Switch>
//      </BrowserRouter>
// );

// ReactDOM.render(routes, document.getElementById('root'));


import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)