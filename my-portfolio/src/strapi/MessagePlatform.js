// import React, { useState } from "react";
// import { Grid, GridItem, Container } from "@chakra-ui/react";
// import MessageInput from "./MessageInput";
// import MessageBoard from "./MessageBoard";
// function MessagePlatform() {
//   const [messages, setMessages] = useState([]);
//   const handleFormSubmit = message => {
//     setMessages(prevMessages => [
//       ...prevMessages,
//       {
//         name: message.name,
//         message: message.message,
//         avatar:
//           "https://i.pinimg.com/564x/28/e5/fd/28e5fdc6f18f16cbb9b66539eed36094.jpg"
//       }
//     ]);
//   };
//   return (
//     <Container mt="100px">
//       <Grid
//         templateColumns="repeat(2, 1fr)"
//         templateRows="repeat(2, 1fr)"
//         gap={7}
//         p="10px"
//       >
//         <GridItem minW="250px" colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
//           <MessageInput onSubmit={handleFormSubmit} />
//         </GridItem>

//         <GridItem colStart={2} colEnd={3}>
//           <MessageBoard messages={messages} />
//         </GridItem>
//       </Grid>
//     </Container>
//   );
// }

// export default MessagePlatform;
import React, { useState } from "react";
import { Grid, GridItem, Container } from "@chakra-ui/react";
import MessageInput from "./MessageInput";
import MessageBoard from "./MessageBoard";

function MessagePlatform() {
  const [messages, setMessages] = useState([]);

  const handleFormSubmit = async message => {
    try {
      console.log("Submitting message:", message);
      const response = await fetch("http://localhost:1337/message-board", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      });

      if (!response.ok) {
        throw new Error("Failed to save message.");
      }

      const data = await response.json();
      console.log("Response data:", data);
      setMessages(prevMessages => [
        ...prevMessages,
        {
          id: data.id,
          name: data.name,
          message: data.message,
          avatar: data.avatar
        }
      ]);
    } catch (error) {
      console.log(error);
    }
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
