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
