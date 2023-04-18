import React from "react";
import { Image, Grid, GridItem, Text, Card, Flex } from "@chakra-ui/react";
import working from "../.././images/working.gif";
import InfoSection from "../SecondSection/InfoSection";
// import CuteButton from "../CuteButton";

function AboutMe(props) {
  return (
    <div>
      <Flex align="center" justify="center">
        <Card
          w="80%"
          mt="100px"
          boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
          bg="transparent"
          borderRadius="50px"
        >
          <Grid
            padding="20px"
            h="500"
            justifyContent="center"
            alignItems="center"
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(3, 1fr)"
            gap={3}
            ml="100px"
            mr="100px"
          >
            <GridItem
              colStart={1}
              colEnd={3}
              rowStart={1}
              rowEnd={2}
              fontFamily="Dancing Script"
              fontSize="100px"
              ml="150px"
              paddingTop="60px"
            >
              <Text
                fontFamily="Dancing Script"
                // fontSize="70px"
                overflowWrap="break-word"
                fontSize={{ base: "xl", sm: "3xl", md: "6xl" }}
              >
                Alina Stefanica
              </Text>
            </GridItem>
            <GridItem
              colStart={1}
              colEnd={3}
              rowStart={2}
              rowEnd={3}
              fontFamily="Poppins"
              fontSize="20px"
              ml="100px"
              mt="50px"
            >
              <Text fontFamily="Poppins" fontSize="20px">
                I am currently on a journey to become a software developer.I am
                learning something new every day, like how to turn coffee into
                code and how to solve problems with a keyboard instead of a
                hammer. 👾
              </Text>
            </GridItem>
            <GridItem
              colStart={3}
              colEnd={5}
              rowStart={1}
              rowEnd={3}
              ml="100px"
              mt="150px"
            >
              <Image
                src={working}
                borderRadius="full"
                boxSize={{ base: "200px", md: "400px" }}
                boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
              />
            </GridItem>
          </Grid>
        </Card>
      </Flex>
      <Flex align="center" justify="center">
        <Card
          w="80%"
          mt="100px"
          boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
          bg="transparent"
          borderRadius="50px"
        >
          <InfoSection />
        </Card>
      </Flex>
    </div>
  );
}

export default AboutMe;
