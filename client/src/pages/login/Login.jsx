import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {user, dispatch, isFetching} = useContext(Context);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (e)=>{
    setLoginError(false);
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await axios.post("/auth/login",{
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
    }
    catch(err){
      setLoginError(true);
      dispatch({type:"LOGIN_FAILURE"});
    }
  }

  console.log(user);
  console.log(isFetching);

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="loginInput" 
        type="text" 
        placeholder="Enter your username..." 
        ref={userRef}
        />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        {loginError && <p className="loginWarning">*Wrong credentials!</p>}
        <button className="loginButton" type="submit" disabled={isFetching}>
        {isFetching ? <i class="fa fa-spinner fa-spin"></i>: `Login`}
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}
