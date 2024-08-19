import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import SideNav from "../Side-Nav/side-nav";

const Header: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);
  const handleHideOffcanvas = () => setShowOffcanvas(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <span
            className="text-white cursor-pointer"
            onClick={handleShowOffcanvas}
          >
            TREBTA ADMIN
          </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/client-request">
                Client Request
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideNav show={showOffcanvas} onHide={handleHideOffcanvas} />
    </>
  );
};

export default Header;
