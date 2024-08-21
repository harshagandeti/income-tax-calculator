import "./App.scss";
import Home from "./Components/Home";
import logo from "./utils/tax.png";
function App() {
  return (
    <div className="App">
      <div className="Nav-Section">
        <div className="Nav-Logo">
          <div className="Img-Logo">
            <img src={logo} color= {"Orange"}></img>
          </div>
          <div className="Text-Logo">
            <h1>Income Tax</h1>
            <h4>Calculator</h4>
          </div>
        </div>
        <div className="Nav-Links">
          <ul>
            <li>HOME</li>
            <li>Old Regime</li>
            <li>New Regime</li>
          </ul>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
