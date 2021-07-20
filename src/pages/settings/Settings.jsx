import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <div className="settingsPP">
            <img className="topImg" src="https://i0.hippopx.com/photos/115/276/905/man-silhouette-man-silhouette-horizon-preview.jpg" alt=""/>
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fas fa-upload"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <div className="settingsDetails">
            <label>Username</label>
            <input type="text" placeholder="Groot" />
            <label>Email</label>
            <input type="email" placeholder="groot@atul-anand.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
