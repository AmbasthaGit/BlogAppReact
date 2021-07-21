import React from 'react';
import { Link } from 'react-router-dom';
import "./topbar.css";

export default function TopBar(){
  const user=false;
  return(
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? <img className="topImg" src="https://i0.hippopx.com/photos/115/276/905/man-silhouette-man-silhouette-horizon-preview.jpg" alt=""/> :
          (
            <ul className="topList">
              <li className="topListItemX">
                <Link to="/login" className="link">LOGIN</Link>
              </li>
              <li className="topListItemX">
                <Link to="/register" className="link">REGISTER</Link>
              </li>
            </ul>
          )
        }
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}