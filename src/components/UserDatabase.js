import React, { useState, useEffect } from 'react';
import {NavLink } from "react-router-dom";
import firebaseApp from '../firebase';
import Navigation from './Navigation';
import MainCta from './MainCta';
import User from './Users';

const UserDatabase = () => {

     const handleOnDelete = id => {
     
          firebaseApp.firestore()
               .collection("users")
               .doc(id)
               .delete();
     };

     const [users, setUsers] = useState([])
     const usersName = [];
     useEffect(() => {
     const unsubscribe = firebaseApp.firestore()
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


     const [search, setSearch] = useState("");
     const [filteredUsers, setFilteredUsers] = useState([]);

     useEffect(() => {
          setFilteredUsers(
               users.filter((user) =>
                    user.name.toLowerCase().includes(search.toLowerCase())
               )
          );
     }, [search, users]);

     
     return (
    <div className="content">
          
          <Navigation />
            <div className="main-container">
               <div className="page-header">
                    <div className="database-headline">
                         <h1 className="page-title">Users</h1>
                         <NavLink to="/adduser" className="navlink"><MainCta title="Create User" /></NavLink>
                    </div>
                    <div className="searchbar-container">
                         
                         <input
                              className="searchbar"
                              type="text"
                              placeholder="Search..."
                              onChange={(e) => setSearch(e.target.value)}
                         />
                    </div>
               </div>

               <div className="database-container">
               {filteredUsers.map((user, id) => (
                    <User key={id} user={user} clickHandler={handleOnDelete} />
               ))}
               </div>          
          </div>
          
    </div>
  );
}

export default UserDatabase;