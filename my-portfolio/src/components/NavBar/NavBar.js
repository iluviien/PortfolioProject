import { Spacer, Heading, Flex, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex as="nav" p="10px" bg="#c8B4E1">
      <Heading fontFamily="Dancing Script" as="h1" color="white">
        Welcome!
      </Heading>
      <Spacer />
      <Button
        as="a"
        href="https://github.com/iluviien"
        fontFamily="Dancing Script"
        textTransform="none"
        colorScheme="ghost"
        color="white"
        fontSize={25}
      >
        GitHub
      </Button>
      <Button
        fontFamily="Dancing Script"
        textTransform="none"
        colorScheme="ghost"
        color="white"
        fontSize={25}
      >
        Spotify Playlist
      </Button>
      <Button
        fontFamily="Dancing Script"
        textTransform="none"
        colorScheme="ghost"
        color="white"
        fontSize={25}
      >
        Contact Me
      </Button>
    </Flex>
  );
}

export default NavBar;
