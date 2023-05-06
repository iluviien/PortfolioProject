import { Card, Box, Text, Avatar, Flex } from "@chakra-ui/react";
// import { fetchMessages } from "./api";
function MessageBoard({ messages }) {
  if (messages.length === 0) {
    return null; // If there are no messages, don't render the Card element
  }
  return (
    <Card
      bg="transparent"
      borderRadius="50px"
      padding="10px"
      boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
    >
      {messages.map((message, index) => (
        <Flex
          key={index}
          alignItems="center"
          style={{
            wordWrap: "break-word",
            maxWidth: "500px",
            overflow: "hidden"
          }}
          p="10px"
        >
          <Avatar
            size={{ base: "md", md: "lg" }}
            name={message.name}
            src={message.avatar}
            mr={4}
          />
          <Box maxW="500px" p={{ base: "5px", md: "10px" }}>
            <Text
              overflowWrap="break-word"
              fontWeight="bold"
              fontSize={{ base: "10px", md: "15px" }}
            >
              {message.name}
            </Text>
            <Text
              overflowWrap="break-word"
              fontSize={{ base: "14px", md: "20px" }}
            >
              {message.message}
            </Text>
          </Box>
        </Flex>
      ))}
    </Card>
  );
}

export default MessageBoard;
