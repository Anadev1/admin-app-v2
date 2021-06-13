// import React, {useRef} from "react";

// const Login = () => {

//      const emailRef = useRef();
//      const passwordRef = useRef();
//      const passwordConfirmRef = useRef();

//      return (
//           <div className="login">
//                <div className="login__form-container">
//                     <img src={logo} alt="logo" className="login__logo"></img>
//                     <h1 className="login__title">Log in</h1>
//                     <form className="login-form">
//                          <input className="login-form__input" placeholder="Email" ref={emailRef} />
//                          <input className="login-form__input" placeholder="Password" type="password" ref={passwordRef} />
//                          <input className="login-form__input" placeholder="Confirm Password" type="password" ref={passwordConfirmRef}/>
//                          <button className="login-form__button" type="submit">Log in</button>
//                     </form>
//                </div>
               
//           </div>
//     );
// };

// export default Login;

import React, {useRef, useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import logo from '../assets/images/logo_blue.svg';

const Login = () => {
  
     const emailRef = useRef()
     const passwordRef = useRef()
     const { login } = useAuth()
     const [error, setError] = useState("")
     const [loading, setLoading] = useState(false)
     const history = useHistory()

     async function handleSubmit(e) {
     e.preventDefault()

     try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
     } catch {
          setError("Failed to log in")
     }

     setLoading(false)
     }

     return (
          <div className="login">
               <div className="login__form-container">
                    <img src={logo} alt="logo" className="login__logo"></img>
                    <h1 className="login__title">Log in</h1>
                    <form onSubmit={handleSubmit}>
                         <input className="login-form__input" placeholder="Email" ref={emailRef} />
                         <input className="login-form__input" placeholder="Password" type="password" ref={passwordRef} />
                         <button className="login-form__button" disabled={loading} type="submit">Log in</button>
                    </form>
                    <p className="login__account-text">Don't have an account yet? <Link to="/signup" className="login__account-link" >Sign up here.</Link></p>
               </div>
        </div>
        
     )
    
};

export default Login;