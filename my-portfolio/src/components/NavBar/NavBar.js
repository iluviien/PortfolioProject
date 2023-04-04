import "./NavBar.css";
import { Box, HStack, Button } from "@chakra-ui/react";
// function NavBar() {
//   return (
//     <>
//       <Navbar className="nav-bar-default">
//         <Container className="nav-container">
//           {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
//           <Nav className="ms-auto">
//             <Nav.Link href="https://github.com/iluviien">GitHub</Nav.Link>
//             <Nav.Link href="#SpotifyLink">Spotify Playlists</Nav.Link>
//             <Nav.Link href="#GetInTOuch">Get in touch</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavBar;

function NavBar() {
  return (
    <Box bg="rgb(207, 156, 205)" w="full" h="50px" p={1.5}>
      <HStack justify="flex-end">
        <Button fontFamily="poppins" colorScheme="ghost" color="white">
          GitHub
        </Button>
        <Button colorScheme="ghost" color="white">
          Spotify Playlist
        </Button>
        <Button colorScheme="ghost" color="white">
          Contact Me
        </Button>
      </HStack>
    </Box>
  );
}

export default NavBar;
