import React from "react";
import working from "../.././images/working.gif";
import InfoSection from "../SecondSection/InfoSection";
import { Image, Text, Container, Heading } from "@chakra-ui/react";

function AboutMe(props) {
  return (
    <Container>
      <Heading
        fontFamily="Dancing Script"
        color="#BF94E4"
        fontSize={{ base: "20px", md: "40px", lg: "70px" }}
        overflowWrap="break-word"
      >
        Alina Stefanica
      </Heading>

      <Text fontFamily="Poppins" fontSize={{ base: "14px", md: "20px" }}>
        I am currently on a journey to become a software developer. I am
        learning something new every day, like how to turn coffee into code and
        how to solve problems with a keyboard instead of a hammer. 👾
      </Text>

      <Image
        src={working}
        boxSize={{ base: "150px", md: "300px", lg: "400px" }}
        boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
        borderRadius="full"
      />

      <Container mt={{ base: "50px", md: "100px" }}>
        <InfoSection />
      </Container>
    </Container>
  );
}

export default AboutMe;
