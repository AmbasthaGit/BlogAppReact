import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {

  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const [email, setEmail ] = useState("");
  const [error, setError ] = useState(false);
  const [working, setWorking] = useState(false);


  const handleSubmit = async (e)=>{
    setError(false);
    setWorking(true);
    e.preventDefault();
    try{
      const res = await axios.post("/auth/register",{
        username,
        email,
        password
      });
      res.data && window.location.replace("/login");
    }
    catch(err){
      setError(true);
      console.log(err);
    } 
  }

  return (
    <div className="register">
      <form className="registerForm"
      onSubmit={handleSubmit}
      >
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." 
        onChange={e=>setUsername(e.target.value)}
        />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." 
        onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Create new password..." 
        onChange={e=>setPassword(e.target.value)}
        />
        {error && <p className="err">* Username/Email already in use!</p>}
        <button className="registerButton" type="submit" disabled={working}>
        {working ? <i class="fa fa-spinner fa-spin"></i>: `Register`}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">Login</Link>
      </button>
    </div>
  )
}
