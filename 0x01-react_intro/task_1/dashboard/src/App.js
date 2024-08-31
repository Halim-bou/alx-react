import logo from "./logo-hbn.jpg";
import { getFullYear, getFooterCopy } from "./utils.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="logo-hbn" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">Copyright {getFullYear()} - {getFooterCopy()}</div>
    </div>
  );
}

export default App;
