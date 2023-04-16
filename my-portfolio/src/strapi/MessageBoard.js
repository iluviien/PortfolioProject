import {
  Card,
  //CardBody,
  Box,
  //VStack,
  //Input,
  //Textarea,
  // HStack,
  //Button,
  Text,
  //Stack,
  Avatar,
  //Divider,
  Flex
  //Spacer,
  //IconButton,
  //Tooltip,
  //useToast
} from "@chakra-ui/react";
function MessageBoard({ messages }) {
  return (
    <Card>
      {messages.map((message, index) => (
        <Flex key={index} alignItems="center" my={3} mx={3}>
          <Avatar size="lg" name={message.name} src={message.avatar} mr={4} />
          <Box>
            <Text fontWeight="bold">{message.name}</Text>
            <Text>{message.message}</Text>
          </Box>
        </Flex>
      ))}
    </Card>
  );
}

export default MessageBoard;
