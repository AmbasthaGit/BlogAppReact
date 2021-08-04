import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
        {user ? <Home /> : <Login />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/write">
        {user ? <Write /> : <Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
