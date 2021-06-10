import React from "react";
import useInput from "./useInput"
import firebaseApp from '../firebase';
import logo from '../assets/images/logo_blue.svg';

const Login = () => {

     const email = useInput("")
     const password = useInput("")

     const signIn = async (event) => {
     event.preventDefault();

          try {
               const user = await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
               console.log("user", user);
               alert("Welcome back!");
               
          }  catch (error) {
               console.log("error", error);
               alert(error.message);
          }
     }    
     

     return (
          <div className="login">
               <div className="login__form-container">
                    <img src={logo} alt="logo" className="login__logo"></img>
                    <h1 className="login__title">Log in</h1>
                    <form onSubmit={signIn} className="login-form">
                         <input className="login-form__input" placeholder="Email" {...email} />
                         <input className="login-form__input" placeholder="Password" type="password" {...password}/>
                         <button className="login-form__button" type="submit">Log in</button>
                    </form>
               </div>
               
          </div>
    );
};

export default Login;