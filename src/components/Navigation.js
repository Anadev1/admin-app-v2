import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo_white.svg';
import dashboardIcon from '../assets/images/dashboard_icon.svg';
import usersIcon from '../assets/images/users_icon.svg';
import jobsIcon from '../assets/images/jobs_icon.svg';
import settingsIcon from '../assets/images/settings_icon.svg';
import logoutIcon from '../assets/images/logout_icon.svg';


class Navigation extends React.Component {
     render() {
          return (
               <div className="navigation">
                    <div className="navigation__header">
                         <img src={logo} alt="logo"></img>
                    </div>
                    
                    <div className="navigation__menu">
                         <NavLink to="/admin-app" className="navlink navlink__navigation" activeClassName="is-active" exact={true}>
                              <div className="navlink__container">
                                   <img src={dashboardIcon} className="navlink__icon"></img>
                                   <p className="navlink__name">Dashboard</p>
                              </div>
                         </NavLink>

                         <NavLink to="/userdatabase" className="navlink navlink__navigation" activeClassName="is-active">
                              <div className="navlink__container">
                                   <img src={usersIcon} className="navlink__icon"></img>
                                   <p className="navlink__name">Users</p>
                              </div>      
                         </NavLink>
                         <NavLink to="/usercreation" className="navlink navlink__navigation" activeClassName="is-active">
                              <div className="navlink__container">
                                   <img src={jobsIcon} className="navlink__icon"></img>
                                   <p className="navlink__name">Jobs</p>
                              </div>  
                         </NavLink>
                    </div>

                    <div className="navigation__settings">
                         <NavLink to="/settings" className="navlink navlink__navigation" activeClassName="is-active">
                              <div className="navlink__container">
                                   <img src={settingsIcon} className="navlink__icon"></img>
                                   <p className="navlink__name">Settings</p>
                              </div>      
                         </NavLink>
                         <NavLink to="/login" className="navlink navlink__navigation" activeClassName="is-active">
                              <div className="navlink__container">
                                   <img src={logoutIcon} className="navlink__icon"></img>
                                   <p className="navlink__name">Log out</p>
                              </div>  
                         </NavLink>
                    </div>
               </div>
          )
     }
}

export default Navigation;