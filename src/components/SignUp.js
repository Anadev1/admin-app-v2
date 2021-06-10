import React from "react";
import useInput from "./useInput"
import firebaseApp from '../firebase';

const SignUp = () => {

     const email = useInput("")
     const password = useInput("")

     const signUp = async (event) => {
     event.preventDefault();

          try {
               
               const user = await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value)
               console.log("user", user)
               alert(`Welcome ${email.value}!`);
               
          }  catch (error) {
               console.log("error", error);
               alert(error.message);
          }
     }    
     

    return (
        <form onSubmit={signUp}>
          <input placeholder="Email" {...email} />
          <input placeholder="Password" type="password" {...password}/>
          <button type="submit">Sign up</button>
        </form>
    );
};

export default SignUp;