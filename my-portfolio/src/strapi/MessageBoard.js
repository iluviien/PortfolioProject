import { Card, Box, Text, Avatar, Flex } from "@chakra-ui/react";
function MessageBoard({ messages }) {
  if (messages.length === 0) {
    return null; // If there are no messages, don't render the Card element
  }
  return (
    <Card
      borderRadius="50px"
      padding="10px"
      boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
    >
      {messages.map((message, index) => (
        <Flex
          key={index}
          alignItems="center"
          style={{ wordWrap: "break-word", maxWidth: "100%" }}
          p="10px"
        >
          <Avatar
            size={{ base: "md", md: "lg" }}
            name={message.name}
            src={message.avatar}
            mr={4}
          />
          <Box maxW="400px" p={{ base: "5px", md: "10px" }}>
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
