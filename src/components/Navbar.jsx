import { Nav , Form , FormControl , Button , Navbar , NavDropdown, Container } from "react-bootstrap";
import "./customNav.css";

const Customnavbar = () =>{
    return(
      <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="#home" className="mr-0"><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" height={40} width={40}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Container>
</Navbar>
    )
}
export default Customnavbar;
