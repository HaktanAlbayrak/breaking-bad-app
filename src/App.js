import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Profile from "./Pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
