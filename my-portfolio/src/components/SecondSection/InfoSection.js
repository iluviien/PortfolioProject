import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";
import image2 from "../.././images/image2.jpg";
function InfoSection() {
  return (
    <Grid
      h="500"
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={3}
      ml="100px"
      mr="100px"
      justifyContent="center"
      alignItems="center"
    >
      <GridItem
        colStart={1}
        colEnd={3}
        rowStart={1}
        rowEnd={3}
        ml="100px"
        mr="100px"
        mt="100px"
      >
        <Image
          src={image2}
          borderRadius="full"
          boxSize="400px"
          boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
        />
      </GridItem>
      <GridItem
        colStart={3}
        colEnd={5}
        fontFamily="Dancing Script"
        fontSize="100px"
        paddingLeft="25px"
      >
        About Me
      </GridItem>
      <GridItem
        colStart={3}
        colEnd={5}
        rowStart={2}
        rowEnd={3}
        fontFamily="Poppins"
        fontSize="17px"
        mr="200px"
      >
        Born in Romania and living in the Isle of Man. Lover of books, video
        games and all things fitness(except cardio). Whether I'm flipping
        through the pages of a book, battling it out in the virtual world, or
        pushing myself at the gym, I always strive to find balance in my
        hobbies. I'm all about trying new things even if it scares me a
        little.👻
      </GridItem>
    </Grid>
  );
}

export default InfoSection;
