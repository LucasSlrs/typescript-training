import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import GitUsers from "./components/gitusers";
import Crypto from "./components/randomcrypto";
import GetRandomNation from "./components/getrandomnation";
import GetRestaurant from "./components/getrestaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/gitusers">Github Users</Link>
          <Link to="/randomcrypto">Random crypto</Link>
          <Link to="/GetRandomNation">Random Nation</Link>
          <Link to="/restaurants">Restaurant</Link>
        </nav>
        <Route path="/gitusers" component={GitUsers} />
        <Route path="/randomcrypto" component={Crypto} />
        <Route path="/GetRandomNation" component={GetRandomNation} />
        <Route path="/restaurants" component={GetRestaurant} />
      </Router>
    </div>
  );
}

export default App;
