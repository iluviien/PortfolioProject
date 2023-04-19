import React, { useState } from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";
function MessagePlatform() {
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
    <Container mt="100px">
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={7}
        p="10px"
      >
        <GridItem minW="250px" colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
          <MessageInput onSubmit={handleFormSubmit} />
        </GridItem>

        <GridItem colStart={2} colEnd={3}>
          <MessageBoard messages={messages} />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default MessagePlatform;
