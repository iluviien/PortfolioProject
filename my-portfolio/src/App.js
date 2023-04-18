import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMeSection/AboutMe";
import ThankYouNote from "./pages/ThankYouNote";
import NavBar from "./components/NavBar/NavBar";
import { Grid, GridItem, Card, Flex } from "@chakra-ui/react";
import MessageBoard from "./strapi/MessageBoard";
import MessageInput from "./strapi/MessageInput";

function App() {
  const [messages, setMessages] = useState([]);
  const handleFormSubmit = message => {
    setMessages(prevMessages => [
      ...prevMessages,
      {
        name: message.name,
        message: message.message,
        avatar:
          "https://i.pinimg.com/564x/28/e5/fd/28e5fdc6f18f16cbb9b66539eed36094.jpg"
      }
    ]);
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/ThankYouNote" element={<ThankYouNote />} />
      </Routes>

      <Flex align="center" justify="center">
        <Card
          boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
          mt="100px"
          w="80%"
          borderRadius="50px"
          p="30px"
        >
          <Grid
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={6}
            // ml="100px"
            // mr="100px"
            // justifyContent="center"
            // alignItems="center"
            p="10px"
          >
            <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2}>
              <MessageInput onSubmit={handleFormSubmit} />
            </GridItem>
            <GridItem colStart={4} colEnd={5} rowStart={1} rowEnd={3}>
              <MessageBoard messages={messages} />
            </GridItem>
          </Grid>
        </Card>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
