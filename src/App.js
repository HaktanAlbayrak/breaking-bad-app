import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Quotes from "./Pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/" className="page-link">
            Characters
          </Link>
          <span className="page-link">|</span>
          <Link to="/quotes" className="page-link">
            Quotes
          </Link>
        </nav>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
