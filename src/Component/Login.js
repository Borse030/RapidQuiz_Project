import React from 'react';
import {useState} from "react"
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [regData, setRegData] = useState([])
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const fileds = [
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
     axios.get("http://localhost:3000/userData")
     .then((res)=> {setRegData(res)
    console.log(regData)
    
    })




      console.log("Logging in with:", email, password);
    };




  return (
    <div>
        <h2>Login</h2>
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
        <Link to={"/signup"}>New User</Link>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
