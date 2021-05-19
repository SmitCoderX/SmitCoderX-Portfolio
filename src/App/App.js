import '../Css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Screens/Home.js"
import Navbar from "../Navigation/Navbar.js"
import Social from "../Screens/Social.js"
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Home />
      <Social/>

    </div>
    </Router>
  );
}

export default App;
