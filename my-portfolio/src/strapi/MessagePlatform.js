import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid, GridItem, HStack, Flex, Stack } from "@chakra-ui/react";

import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";

function MessagePlatform() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMessageHandler = useCallback(async function () {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://message-board-4cae5-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!😣");
      }
      const data = await response.json();
      const loadedMessages = [];
      for (const key in data) {
        loadedMessages.push({
          id: key,
          name: data[key].name,
          message: data[key].message,
          avatar:
            "https://i.pinimg.com/564x/28/e5/fd/28e5fdc6f18f16cbb9b66539eed36094.jpg"
        });
      }
      setMessages(loadedMessages);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchMessageHandler();
  }, [fetchMessageHandler]);
  async function addMessageHandler(message) {
    const response = await fetch(
      "https://message-board-4cae5-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    console.log(data);
    fetchMessageHandler();
  }
  let content = <p>Found no messages.</p>;
  if (messages.length > 0) {
    content = <MessageBoard message={messages} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading messages...</p>;
  }

  return (
    // <HStack>
    //   <Grid
    //     justifyContent="start"
    //     templateColumns="repeat(2, 1fr)"
    //     templateRows={{ base: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
    //     gap={2}
    //     p="10px"
    //     maxH={{ base: "100%", sm: "300px" }}
    //     maxW={{ base: "100%", sm: "300px" }}
    //     alignItems="flex-start"
    //   >
    //     <GridItem minW="250px" colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
    //       <MessageInput onSubmit={addMessageHandler} />
    //     </GridItem>
    //     <GridItem
    //       colStart={{ base: 1, md: 2 }}
    //       colEnd={3}
    //       rowStart={{ base: 2, md: 1 }}
    //       rowEnd={3}
    //     >
    //       <MessageBoard messages={messages} />
    //     </GridItem>
    //   </Grid>
    // </HStack>

    <Flex
      justifyContent="center"
      alignItems="flex-start"
      maxH={{ base: "100%", sm: "300px" }}
      maxW={{ base: "100%", sm: "300px", md: "600px", lg: "1200px" }}
    >
      <Stack
        direction={{ base: "column", sm: "row" }}
        w="100%"
        spacing={2}
        pr={{ base: 0, sm: 2 }}
      >
        <Box minW="250px" pr={2}>
          <MessageInput onSubmit={addMessageHandler} />
        </Box>
        <Box flex={1} maxW="100%">
          <MessageBoard messages={messages} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default MessagePlatform;
