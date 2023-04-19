import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMeSection/AboutMe";
import ThankYouNote from "./pages/ThankYouNote";
import NavBar from "./components/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import background from "./images/background.jpg";
import MessagePlatform from "./strapi/MessagePlatform";
function App() {
  return (
    <Box
      bg={`url(${background})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      minHeight="250vh"
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/ThankYouNote" element={<ThankYouNote />} />
        </Routes>
        <MessagePlatform />
      </BrowserRouter>
    </Box>
  );
}

export default App;
