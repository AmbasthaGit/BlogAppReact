import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Sidebar() {

  const [cats,setCats] = useState([]);

  useEffect(() => {
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data);
    }
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
        <p>
        A learner, an investor, a writer, and an independent thinker.
        <br></br><br></br>
        I believe in innovation, and creating things (whether a business or a piece of art, each adds value to our world).
        </p>
      </div>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul> */}
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a className="link" href="https://www.facebook.com/atul55anand" target="_blank" rel="noreferrer">
            <i className="sidebarIcon fab fa-facebook-square"></i>
          </a>
          <a className="link" href="https://instagram.com/atul13a?utm_medium=copy_link" target="_blank" rel="noreferrer">
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </a>
          <Link className="link">
            <i className="sidebarIcon fab fa-twitter-square"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
