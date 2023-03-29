import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMeSection/AboutMe";
import "./App.css";
import ThankYouNote from "./pages/ThankYouNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/ThankYouNote" element={<ThankYouNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
