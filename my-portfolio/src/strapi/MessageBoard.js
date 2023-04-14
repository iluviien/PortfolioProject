import "./MessageBoard.css";
import {
  Box,
  VStack,
  Input,
  Textarea,
  HStack,
  Button,
  Text
} from "@chakra-ui/react";

function MessageBoard(props) {
  return (
    <div className="containerDaddy">
      <Box
        justifyContent="center"
        m="auto"
        borderRadius="md"
        my={6}
        w="1000"
        h="300px"
      >
        <HStack>
          <VStack>
            <Input placeholder="Name" type="text" />
            <Textarea placeholder="Type message here"></Textarea>
          </VStack>
          <Button bg="blue" fontSize={"10px"}>
            Cick me biatch
          </Button>
          <Box p={3} borderRadius="md" w="650px" h="300px" bg="blue">
            <Text>CHARLEYYYYY</Text>
          </Box>
        </HStack>
      </Box>
    </div>
  );
}
export default MessageBoard;
