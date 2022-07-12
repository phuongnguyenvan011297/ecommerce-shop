import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Album from "./features/Album";
import CartFeature from "./features/Cart";
import ProductFeature from "./features/Product";
import Todo from "./features/Todo";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/" component={ProductFeature} exact />
        <Route path="/products" component={ProductFeature} />
        <Route path="/todo" component={Todo} />
        <Route path="/album" component={Album} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
