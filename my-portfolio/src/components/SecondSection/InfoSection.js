// import React from "react";
import { Image, Grid, GridItem, Text } from "@chakra-ui/react";
import image2 from "../.././images/image2.jpg";

function InfoSection() {
  return (
    <Grid
      h={{ base: "auto", md: "500px" }}
      templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
      templateRows={{ base: "repeat(3, auto)", md: "repeat(3, 1fr)" }}
      gap={3}
      px={{ base: "20px", md: "0" }}
      justifyContent="center"
      alignItems="center"
      textAlign={{ base: "center", md: "left" }}
    >
      <GridItem
        colStart={{ base: 1, md: 1 }}
        colEnd={{ base: 2, md: 3 }}
        rowStart={{ base: 1, md: 1 }}
        rowEnd={{ base: 2, md: 3 }}
        mx={{ base: "auto", md: "0" }}
        mt={{ base: "40px", md: "100px" }}
      >
        <Image
          src={image2}
          borderRadius="full"
          boxSize={{ base: "200px", md: "400px" }}
          boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
          mx={{ base: "auto", md: "0" }}
        />
      </GridItem>
      <GridItem
        colStart={{ base: 1, md: 3 }}
        colEnd={{ base: 2, md: 5 }}
        rowStart={{ base: 2, md: 1 }}
        rowEnd={{ base: 3, md: 2 }}
        fontFamily="Dancing Script"
        fontSize={{ base: "30px", md: "100px" }}
        paddingTop={{ base: "20px", md: "0" }}
        paddingLeft={{ base: "0", md: "25px" }}
        mx={{ base: "auto", md: "0" }}
      >
        About Me
      </GridItem>
      <GridItem
        colStart={{ base: 1, md: 3 }}
        colEnd={{ base: 2, md: 5 }}
        rowStart={{ base: 3, md: 3 }}
        rowEnd={{ base: 4, md: 4 }}
        fontFamily="Poppins"
        fontSize={{ base: "14px", md: "17px" }}
        mt={{ base: "20px", md: "0" }}
        mx={{ base: "auto", md: "0" }}
        mr={{ base: "0", md: "200px" }}
      >
        <Text>
          Born in Romania and living in the Isle of Man. Lover of books, video
          games and all things fitness (except cardio). Whether I'm flipping
          through the pages of a book, battling it out in the virtual world, or
          pushing myself at the gym, I always strive to find balance in my
          hobbies. I'm all about trying new things even if it scares me a
          little. 👻
        </Text>
      </GridItem>
    </Grid>
  );
}

export default InfoSection;
