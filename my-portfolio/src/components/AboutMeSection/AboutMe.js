// import React from "react";

// import working from "../.././images/working.gif";
// import InfoSection from "../SecondSection/InfoSection";
// // import CuteButton from "../CuteButton";
// import { Image, Grid, GridItem, Text, Card, Flex } from "@chakra-ui/react";

// function AboutMe(props) {
//   return (
//     <div>
//       <Flex align="center" justify="center">
//         <Card
//           w="80%"
//           mt="100px"
//           boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
//           bg="transparent"
//           borderRadius="50px"
//         >
//           <Grid
//             padding="20px"
//             h="500"
//             justifyContent="center"
//             alignItems="center"
//             templateColumns="repeat(4, 1fr)"
//             templateRows="repeat(3, 1fr)"
//             gap={3}
//             ml="100px"
//             mr="100px"
//           >
//             <GridItem
//               colStart={1}
//               colEnd={3}
//               rowStart={1}
//               rowEnd={2}
//               ml="150px"
//               paddingTop="60px"
//               bg="yellow"
//             >
//               <Text
//                 fontFamily="Dancing Script"
//                 // fontSize="70px"
//                 overflowWrap="break-word"
//                 fontSize={{ base: "15px", md: "40px", lg: "70px" }}
//               >
//                 Alina Stefanica
//               </Text>
//             </GridItem>
//             <GridItem
//               colStart={1}
//               colEnd={3}
//               rowStart={2}
//               rowEnd={3}
//               ml="100px"
//               mt="50px"
//               bg="orange"
//             >
//               <Text fontFamily="Poppins" fontSize="20px">
//                 I am currently on a journey to become a software developer.I am
//                 learning something new every day, like how to turn coffee into
//                 code and how to solve problems with a keyboard instead of a
//                 hammer. 👾
//               </Text>
//             </GridItem>
//             <GridItem
//               colStart={3}
//               colEnd={5}
//               rowStart={1}
//               rowEnd={3}
//               ml="100px"
//               mt="150px"
//               bg="purple"
//             >
//               <Image
//                 src={working}
//                 borderRadius="full"
//                 boxSize={{ base: "100px", md: "300px", lg: "400px" }}
//                 boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
//               />
//             </GridItem>
//           </Grid>
//         </Card>
//       </Flex>
//       <Flex align="center" justify="center">
//         <Card
//           w="80%"
//           mt="100px"
//           boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
//           bg="transparent"
//           borderRadius="50px"
//         >
//           <InfoSection />
//         </Card>
//       </Flex>
//     </div>
//   );
// }

// export default AboutMe;
import React from "react";
import working from "../.././images/working.gif";
import InfoSection from "../SecondSection/InfoSection";
import { Image, Grid, GridItem, Text, Box } from "@chakra-ui/react";

function AboutMe(props) {
  return (
    <Box>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: 3, md: 6 }}
        padding={{ base: "20px", md: "50px" }}
      >
        <GridItem
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 2, md: 4 }}
          rowStart={1}
          rowEnd={2}
          paddingTop={{ base: "20px", md: "60px" }}
          bg="yellow"
        >
          <Text
            fontFamily="Dancing Script"
            fontSize={{ base: "20px", md: "40px", lg: "70px" }}
            overflowWrap="break-word"
          >
            Alina Stefanica
          </Text>
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 2, md: 4 }}
          rowStart={2}
          rowEnd={{ base: 3, md: 2 }}
          mt={{ base: "20px", md: "50px" }}
          bg="orange"
        >
          <Text fontFamily="Poppins" fontSize={{ base: "14px", md: "20px" }}>
            I am currently on a journey to become a software developer. I am
            learning something new every day, like how to turn coffee into code
            and how to solve problems with a keyboard instead of a hammer. 👾
          </Text>
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 4 }}
          colEnd={5}
          rowStart={{ base: 3, md: 1 }}
          rowEnd={3}
          mt={{ base: "20px", md: "150px" }}
          bg="purple"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={working}
            boxSize={{ base: "150px", md: "300px", lg: "400px" }}
            boxShadow="0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.5)"
            borderRadius="full"
          />
        </GridItem>
      </Grid>
      <Box mt={{ base: "50px", md: "100px" }}>
        <InfoSection />
      </Box>
    </Box>
  );
}

export default AboutMe;
