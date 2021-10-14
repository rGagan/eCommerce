import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ProductList from './components/Product_list';
import ProductDetails from './components/Product_details';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <header >
        <Header />
      </header>
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
        {/* </Switch>
        <Switch> */}
          <Route path="/product/:productId" exact component={ProductDetails} />
          {/* <Route path="/" exact component={ProductList} /> */}

        {/* </Switch>
        <Switch> */}
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
