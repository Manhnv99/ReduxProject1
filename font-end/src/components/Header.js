import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = (props) => {
  const listUser = useSelector((state) => state.listUser.listUser);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title={"(" + listUser.length + ")" + "Danh sách người dùng"}
                id="basic-nav-dropdown"
              >
                {listUser.map((item, index) => {
                  return (
                    <NavDropdown.Item href="#" key={index}>
                      {item.userName}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
