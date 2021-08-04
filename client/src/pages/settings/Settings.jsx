import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {

  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } 
      catch (err) {

      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log( user.username );
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle bn632-hover bn28">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <div className="settingsPP">
            <img className="topImg" 
            src={file ? URL.createObjectURL(file) : ( user.profilePic ? PF + user.profilePic : "https://ambitioustracks.com/wp-content/uploads/2017/01/1.-fundadores.png")
            } 
            alt=""/>
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fas fa-upload"></i>
            </label>
            <input 
            type="file" 
            id="fileInput" 
            style={{display:"none"}} 
            onChange={(e)=>setFile(e.target.files[0])}
            />
          </div>
          <div className="settingsDetails">
            <label>Username</label>
            <input 
            type="text" 
            placeholder = {user.username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
            type="email" 
            placeholder= { user.email }
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
            type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="settingsSubmit bn632-hover bn22" type="submit">Update</button>
            {success && (
              <span
                style={{ color: "green", textAlign: "center", marginTop: "20px" }}
              >
                Profile has been updated...
              </span>
            )}
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
