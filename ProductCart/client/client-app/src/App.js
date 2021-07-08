import "./App.css";

import Header from "./components/Parts/Header/Header";

import Register from "./components/UnathorizedUsers/Register/Register";
import Login from "./components/UnathorizedUsers/Login/Login";
import UpdateProfile from "./components/AuthorizedUsers/UpdateProfile/UpdateProfile";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProductScreen from './components/ProductScreen/ProductScreen';

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
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/product/:id" component={ProductScreen} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
