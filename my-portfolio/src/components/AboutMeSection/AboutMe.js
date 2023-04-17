// import InfoSection from "../SecondSection/InfoSection";
import React from "react";
import { Image, Grid, GridItem, Text } from "@chakra-ui/react";
import working from "../.././images/working.gif";
import InfoSection from "../SecondSection/InfoSection";

function AboutMe(props) {
  return (
    <div>
      <Grid
        h="500"
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={3}
        justifyContent="center"
      >
        <GridItem
          bg="brown"
          colStart={1}
          colEnd={3}
          rowStart={1}
          rowEnd={2}
          fontFamily="Dancing Script"
          fontSize="100px"
          paddingLeft="25px"
        >
          <Text fontFamily="Dancing Script" fontSize="70px">
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
          bg="orange"
        >
          <Text fontFamily="Poppins" fontSize="20px">
            I am currently on a journey to become a software developer.I am
            learning something new every day, like how to turn coffee into code
            and how to solve problems with a keyboard instead of a hammer. 👾
          </Text>
        </GridItem>
        <GridItem
          bg="blue"
          colSpan={2}
          rowSpan={2}
          paddingTop="20px"
          paddingBottom="20px"
          paddingLeft="20px"
        >
          <Image src={working} borderRadius="full" boxSize="400px" />
        </GridItem>
      </Grid>
      <InfoSection />
    </div>
  );
}

export default AboutMe;
