import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar className="nav-bar-default">
        <Container className="nav-container">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/iluviien">GitHub</Nav.Link>
            <Nav.Link href="#SpotifyLink">Spotify Playlists</Nav.Link>
            <Nav.Link href="#GetInTOuch">Get in touch</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
