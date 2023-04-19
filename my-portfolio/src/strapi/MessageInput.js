import React, { useState } from "react";

import {
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";

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
    <Card
      borderRadius="25px"
      p="40px"
      alignItems="left"
      padding="10px"
      boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
      bg="transparent"
    >
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
          <FormLabel fontSize={{ base: "14px", md: "20px" }}>Message</FormLabel>
          <Textarea
            fontSize={{ base: "14px", md: "20px" }}
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
