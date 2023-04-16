import { Card, Box, Text, Avatar, Flex } from "@chakra-ui/react";
function MessageBoard({ messages }) {
  return (
    <Card>
      {messages.map((message, index) => (
        <Flex
          key={index}
          alignItems="center"
          my={3}
          mx={3}
          style={{ wordWrap: "break-word", maxWidth: "100%" }}
        >
          <Avatar size="lg" name={message.name} src={message.avatar} mr={4} />
          <Box maxW="400px">
            <Text overflowWrap="break-word" fontWeight="bold">
              {message.name}
            </Text>
            <Text overflowWrap="break-word">{message.message}</Text>
          </Box>
        </Flex>
      ))}
    </Card>
  );
}

export default MessageBoard;
