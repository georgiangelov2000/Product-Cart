import "./App.css";

import Header from "./components/Parts/Header/Header";

import Register from "./components/UnathorizedUsers/Register/Register";
import Login from "./components/UnathorizedUsers/Login/Login";
import UpdateProfile from "./components/AuthorizedUsers/UpdateProfile/UpdateProfile";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
