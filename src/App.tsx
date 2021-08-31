import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import GitUsers from "./components/gitusers";
import Crypto from "./components/randomcrypto";
import GetRestaurant from "./components/getbeers";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="flex">
          <Link to="/gitusers">Github Users</Link>
          <Link to="/randomcrypto">Random crypto</Link>
          <Link to="/beers">Beers</Link>
        </nav>
        <Route path="/gitusers" component={GitUsers} />
        <Route path="/randomcrypto" component={Crypto} />
        <Route path="/beers" component={GetRestaurant} />
      </Router>
    </div>
  );
}

export default App;
