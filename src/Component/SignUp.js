import React from 'react';
import {useState} from "react"
import { Link } from 'react-router-dom';
import "./SignUp.css"
import axios from "axios"
const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
  
  
    const onChangeName = (e) => {
      setName(e.target.value);
    };
  
    const fileds = [
      {
        lebel: "Name",
        type: "text",
        data: name,
        onChange: onChangeName,
      },
     
      {
        lebel: "User Name",
        type: "email",
        data: email,
        onChange: onChangeEmail,
      },
      {
        lebel: "Password",
        type: "text",
        data: password,
        onChange: onChangePassword,
      },
    ];
  
    const handleLogin = () => {
      // Handle login logic here
axios.post("http://localhost:3000/userData", fileds)



      console.log("Sign in with:", name,  email, password);
    };
  


  return (
    <div>
      <h2>Sign-Up Page</h2>
      <form>
        {fileds.map((value) => {
          return (
            <>
              <label>{value.lebel}</label>
              <input
                type={value.type}
                value={value.data}
                onChange={value.onChange}
              />
              <br />
            </>
          );
        })}
        <Link to={"/"}>Have a Account!</Link>
        <br />
        <button type="button" onClick={handleLogin}>
          Register User
        </button>
      </form>
    </div>
  );
}

export default SignUp;
