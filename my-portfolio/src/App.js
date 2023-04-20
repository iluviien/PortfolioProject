import NavBar from "./components/NavBar/NavBar";
import { Box } from "@chakra-ui/react";
import background from "./images/background.jpg";
import MainPage from "./Layouts/MainPage";

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
      <NavBar />
      <MainPage />
    </Box>
  );
}

export default App;
