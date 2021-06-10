import React, { useState } from 'react';
import {NavLink } from "react-router-dom";
import { db } from '../firebase';
import Navigation from './Navigation';
import MainCta from './MainCta';
import exitIcon from '../assets/images/exit_icon.svg';

const AddUser = () => {

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [role, setRole] = useState('');

     const onSubmit = e => {
          e.preventDefault()
          db
               .collection('users')
               .add({
                    name,
                    email,
                    role,
               })
          .then(() => setName(''), setEmail(''), setRole(''))
     }

     return (

          <div className="content">

               <Navigation />

               <div className="main-container">
                    <div className="page-header page-header--adduser">
                         <h1 className="page-title">Add User</h1>
                         <NavLink to="/userdatabase" className="navlink"><img src={exitIcon} alt="exit icon" className="adduser__exit-icon"/></NavLink>
                    </div>

                    <div className="adduser">
                         <form onSubmit={onSubmit} className="adduser__form">
                              <input className="adduser__input" placeholder="Name" value={name} name="name"
                                   onChange={e => setName(e.currentTarget.value)} type="text" />
                              <input className="adduser__input" placeholder="Email" value={email} name="email"
                                   onChange={e => setEmail(e.currentTarget.value)} type="text" />
                              <input className="adduser__input" placeholder="Role" value={role} name="role"
                                   onChange={e => setRole(e.currentTarget.value)} type="text" />
                              <MainCta title="Create User" className="adduser__button" />
                         </form>
                    </div>          
               </div>
         
          </div>
          
     );

};

export default AddUser;