import React, { useState } from "react";

import {
  Card,
  //CardBody,
  FormControl,
  FormLabel,
  //Box,
  //VStack,
  Input,
  Textarea,
  // HStack,
  Button
  //Text,
  //Stack,
  // Avatar,
  //Divider,
  //Flex
  //Spacer,
  //IconButton,
  //Tooltip,
  //useToast
} from "@chakra-ui/react";

// function MessageInput(props) {
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   return (
//     <Card w="1000px">
//       <CardBody>
//         <VStack justifyContent="left">
//           <Input
//             w="150px"
//             placeholder="Name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             mb={3}
//           />

//           <Textarea
//             w="400px"
//             placeholder="Message"
//             value={message}
//             onChange={e => setMessage(e.target.value)}
//             mb={3}
//           />
//           <Button
//             colorScheme="purple"
//             onClick={() => {
//               const newMessage = { name: name, message: message };
//               setMessages([...messages, newMessage]);
//               setName("");
//               setMessage("");
//             }}
//           >
//             Submit
//           </Button>
//         </VStack>
//       </CardBody>

//       <VStack spacing={4}>
//         {messages.map((message, index) => (
//           <CardBody key={index} bg="white" boxShadow="md" p={4} rounded="md">
//             <Flex>
//               <Avatar
//                 size="sm"
//                 name={message.name}
//                 src="images/catAvatar.jpg"
//                 mr={2}
//               />
//               <Text fontWeight="bold">{message.name}</Text>
//             </Flex>
//             <Text p={2} mt="5px">
//               {message.message}
//             </Text>
//           </CardBody>
//         ))}
//       </VStack>
//     </Card>
//   );
// }

// export default MessageInput;

function MessageInput({ onSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, message });
    setName("");
    setMessage("");
  };

  return (
    <Card alignItems="left">
      <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </FormControl>

        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Card>
  );
}
export default MessageInput;
