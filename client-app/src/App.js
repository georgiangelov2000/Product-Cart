import "./App.css";

import Header from "./components/Parts/Header/Header";

import Register from "./components/UnathorizedUsers/Register/Register";
import Login from "./components/UnathorizedUsers/Login/Login";
import UpdateProfile from "./components/AuthorizedUsers/UpdateProfile/UpdateProfile";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import Cart from "./components/AuthorizedUsers/Cart/Cart";
import ShippingScreen from "./components/AuthorizedUsers/ShippingScreen/ShippingScreen";
import PaymentScreen from "./components/AuthorizedUsers/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./components/AuthorizedUsers/PlaceOrderScreen/PlaceOrderScreen";

import { Switch, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/update-profile" component={UpdateProfile} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={Cart} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
