import { Box, HStack, Button } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg="rgb(207, 156, 205)" w="full" h="50px" p={1.5}>
      <HStack justify="flex-end">
        <Button
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
      </HStack>
    </Box>
  );
}

export default NavBar;
