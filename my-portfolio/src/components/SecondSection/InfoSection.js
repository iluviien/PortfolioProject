// import React from "react";
import { Image, Text, Heading, Card, CardBody, Stack } from "@chakra-ui/react";
import image2 from "../.././images/image2.jpg";

function InfoSection() {
  return (
    <Card
      p="10px"
      maxW="3xl"
      bg="transparent"
      overflow="hidden"
      direction="row"
      align="center"
      justify="center"
    >
      <Image
        src={image2}
        boxSize={{ base: "150px", md: "300px", lg: "400px" }}
        boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
        borderRadius="full"
      />
      <CardBody maxW="md" bg="transparent" variant="elevated" direction="row">
        <Stack spacing="5">
          <Heading
            as="h1"
            color="#BF94E4"
            fontFamily="Dancing Script"
            fontSize={{ base: "20px", md: "40px", lg: "70px" }}
            overflowWrap="break-word"
          >
            About Me
          </Heading>

          <Text fontFamily="Poppins" fontSize={{ base: "14px", md: "20px" }}>
            Born in Romania and living in the Isle of Man. Lover of books, video
            games and all things fitness (except cardio). Whether I'm flipping
            through the pages of a book, battling it out in the virtual world,
            or pushing myself at the gym, I always strive to find balance in my
            hobbies. I'm all about trying new things even if it scares me a
            little. 👻
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default InfoSection;
