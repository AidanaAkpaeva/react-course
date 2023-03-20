import { BrowserRouter as Router } from "react-router-dom";
import "./scss/App.scss";
import "./font-awesome-4.7.0/css/font-awesome.min.css";

import Navbar from "./components/navbar/Navbar";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
