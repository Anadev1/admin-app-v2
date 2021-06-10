import React, { useState, useEffect } from 'react';
import {NavLink } from "react-router-dom";
import { db } from '../firebase';
import Navigation from './Navigation';
import MainCta from './MainCta';
import User from './Users';

const UserDatabase = () => {

     const handleOnDelete = id => {
     
     db
          .collection("users")
          .doc(id)
          .delete();
     };

     const [users, setUsers] = useState([])
     const usersName = [];
     useEffect(() => {
     const unsubscribe = db
          .collection("users") 
          .onSnapshot(snapshot => {
          const listUsers = snapshot.docs.map(doc => ({
               id: doc.id,
               ...doc.data(),
          }))
               usersName.push(listUsers.name);
          setUsers(listUsers)
          })
          
     return () => unsubscribe()
     }, [])
     
     
     return (
    <div className="content">
          
          <Navigation />
            <div className="main-container">
                 <div className="page-header">
                      <h1 className="page-title">Users</h1>
                      <NavLink to="/adduser" className="navlink"><MainCta title="Create User" /></NavLink>
                 </div>

                 <div className="database-container">
                    {users.map(user => (
                         <User user={user} clickHandler={handleOnDelete} />
                    ))}
                 </div>          
          </div>
          
    </div>
  );
}

export default UserDatabase;


