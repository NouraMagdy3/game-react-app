import React from "react";
//In react-router-dom v6, "Switch" is replaced by routes "Routes"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Cart from "./pages/cart/index";
import ReduxCart from "./pages/cart/reduxCounterIndex";
import RecoilCart from "./pages/cart/recoilCounter";
import List from "./pages/list";
import Previewsize from "./pages/windowSizePreview/index";

function App() {
 
 /* render() {
    console.log("App is rendering");*/

    return (
      <Router>
        <div id="App">
          <div className="nav-bar">
            <Link to="/">
              <button className="btn">Games List</button>
            </Link>
            <Link to="/cart">
              <button className="btn">My cart</button>
            </Link>
            <Link to="/reduxCart">
              <button className="btn">redux counter</button>
            </Link>
            <Link to="/recoilCart">
              <button className="btn">recoil counter</button>
            </Link>
            <Link to="/windowdimensions">
              <button className="btn">Window Size</button>
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/cart" element={<Cart hello="Hello Noura" />}></Route>
            <Route path="/reduxCart" element={<ReduxCart />}></Route>
            <Route path="/recoilCart" element={<RecoilCart />}></Route>
            <Route path="/windowdimensions" element={<Previewsize />}></Route>
          </Routes>
        </div>
      </Router>
    );

};

export default App;
