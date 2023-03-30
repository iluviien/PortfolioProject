import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMeSection/AboutMe";
import "./App.css";
import ThankYouNote from "./pages/ThankYouNote";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/ThankYouNote" element={<ThankYouNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
