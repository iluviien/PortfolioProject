import React from "react";
import { Image, Grid, GridItem } from "@chakra-ui/react";
import image2 from "../.././images/image2.jpg";
function InfoSection() {
  return (
    <Grid
      h="500"
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(3, 1fr)"
      gap={3}
      justifyContent="center"
    >
      <GridItem
        colSpan={2}
        rowSpan={2}
        paddingTop="20px"
        paddingBottom="20px"
        paddingLeft="20px"
      >
        <Image src={image2} borderRadius="full" boxSize="400px" />
      </GridItem>
      <GridItem
        colSpan={2}
        rowSpan={1}
        fontFamily="Dancing Script"
        fontSize="100px"
        paddingLeft="25px"
      >
        About Me
      </GridItem>
      <GridItem colSpan={3} fontFamily="Poppins" fontSize="20px">
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
