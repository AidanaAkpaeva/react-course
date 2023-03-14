import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "./font-awesome-4.7.0/css/font-awesome.min.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Page404 from "./pages/Page404";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
