import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMeSection/AboutMe";
import ThankYouNote from "./pages/ThankYouNote";
import NavBar from "./components/NavBar/NavBar";
import { Card, CardBody, Flex } from "@chakra-ui/react";
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
      <Flex
        alignItems="center"
        justifyContent="center"
        direction={["column", "column", "row"]}
        mt="50px"
      >
        <div
          style={{
            backgroundColor: "red",
            display: "flex",
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <Flex direction="column" alignItems="left" mr={[0, 0, 10]}>
            <Card bg="purple">
              <CardBody>
                <MessageInput onSubmit={handleFormSubmit} />
              </CardBody>
            </Card>
          </Flex>

          <Card bg="purple" ml={[0, 0, 10]}>
            <CardBody>
              <MessageBoard messages={messages} />
            </CardBody>
          </Card>
        </div>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
