import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import ContinuePage from "./pages/ContinuePage";
import AddressPage from "./component/AddressPage";
import Popup from "./component/Popup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <TestRoute path="/" element={<Home />} title="shopping" /> */}
          <Route path="/" element={<Home />} />
          <Route path="/CountinueShoping" element={<ContinuePage />} />
          <Route path="/AddressPage" element={<AddressPage />} />
        </Routes>
        <NavBar handlePopoupClick={togglePopup} />
        {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
