import React from 'react';
import classes from "./Login.module.scss"
import TopSec from '../TopSec/TopSec';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import config from "../../config.json"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");

    const handleSubmit = async ()=> {
        if(email.length === 0 || password.length ===0) {
            alert("Please provide email/password")
            return
        }
        let payload = {
          email : email,
          password : password
        }
        debugger
        try {
          const response = await axios.post(`${config.url}/api/auth/login`, payload, {withCredentials: true});
          const userData = await response.data;
          localStorage.setItem("userinfo",userData.username)
          if(userData.isAdmin) {
             navigate('/admin/dashboard')
          }else {
            navigate('/')
          }
        } catch (error) {
          console.log(error);
        }
    }
  return (
    <div className={classes.container}>
      <TopSec />
      <div className={classes.loginBox}>
          <h3>KUDLA STORE</h3>
          <div className={classes.loginInput}>
            <span>Email</span>
            <input type="email" name="" id="" placeholder='Email' onChange={(e) =>setEmail(e.target.value)}/>
          </div>
          <div className={classes.loginInput}>
            <span>Password</span>
            <input type="password" name="" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className={classes.loginButton} onClick={handleSubmit}>LOGIN</button>
      </div>
    </div>
  )
}

export default Login