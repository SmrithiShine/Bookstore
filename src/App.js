import "./App.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import { Switch, Route } from "react-router-dom";
import Products from "./component/products";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/contact";
import Cart from "./component/cart";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
