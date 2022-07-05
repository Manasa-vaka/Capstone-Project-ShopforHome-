import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
    
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;