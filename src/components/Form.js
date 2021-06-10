import React from "react";
import useInput from "./useInput"

const Form = () => {

     const email = useInput("")
     const password = useInput("")

    return (
        <form>
          <input placeholder="Email" {...email} />
          <input placeholder="Password" type="password" {...password}/>
          <button type="submit">Sign up</button>
        </form>
    );
};

export default Form;