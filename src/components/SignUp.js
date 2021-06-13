import React, {useRef, useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from '../assets/images/logo_blue.svg';

const SignUp = () => {
  
     const emailRef = useRef();
     const passwordRef = useRef();
     const passwordConfirmRef = useRef();
     const { signup, currentUser } = useAuth();
     const [error, setError] = useState('');
     const [loading, setLoading] = useState(false);
     const history = useHistory()

     async function handleSubmit(e) {
          e.preventDefault()

          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
               return setError('Passwords do not match!')
          }
          try {
               setError('')
               setLoading(true)
               await signup(emailRef.current.value, passwordRef.current.value)
               history.push("/")
          } catch {
               setError('Failed to create an account')
          }
          setLoading(false)
          
     }

     return (
          <div className="login">
               <div className="signup__form-container">
                    <img src={logo} alt="logo" className="login__logo"></img>
                    <h1 className="login__title">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                         <input className="login-form__input" placeholder="Email" ref={emailRef} />
                         <input className="login-form__input" placeholder="Password" type="password" ref={passwordRef} />
                         <input className="login-form__input" placeholder="Confirm Password" type="password" ref={passwordConfirmRef}/>
                         <button className="login-form__button" disabled={loading} type="submit">Sign Up</button>
                    </form>
                     <p className="login__account-text">Already have an account? <Link to="/login" className="login__account-link" >Log in here.</Link></p>
               </div>
          </div>
        
     )
    
};

export default SignUp;