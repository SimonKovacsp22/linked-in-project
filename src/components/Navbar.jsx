import { Nav , Button , Navbar , NavDropdown, Container, Dropdown, Col } from "react-bootstrap";
import '../style/Navbar.css'
import { FaSearch , FaGripHorizontal , FaFlushed} from 'react-icons/fa';
import { GrNotification} from 'react-icons/gr';
import { MdWork , MdPeopleAlt } from 'react-icons/md';
import { FiMessageSquare} from 'react-icons/fi';
import { ImHome3 } from 'react-icons/im';

const Customnavbar = () =>{
    return(
      <Navbar className="navbarbg py-0" expand="lg">
  <Container>
  <Navbar.Brand href="#home" className="mr-0"><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" height={50}/></Navbar.Brand>
  <span className="mr-sm-auto mr-md-auto mr-auto forSearch">
  <input type="text" placeholder="Search" className="navbarSearch"/>
  <FaSearch className="searchIcon giveColor"/>
  </span>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:'white'}}>
    <Nav.Link href="/" className=" ml-lg-5 ml-md-4 marginForHome ml-sm-3 ml-3 forHover giveColor"><ImHome3 className="d-block HomeMargin iconFont3 "/><small className="">Home</small></Nav.Link>
    <Nav.Link href="/" className=" giveMargin2 ml-md-1 forHover giveColor"><MdPeopleAlt className="d-block ml-4 iconFont2 "/><small className="">MyNetwork</small></Nav.Link>
    <Nav.Link href="/" className=" giveMargin ml-lg-0 ml-md-4 ml-sm-4 ml-4 forHover giveColor"><MdWork className="d-block iconFont5"/><small className="">jobs</small></Nav.Link>
    <Nav.Link href="/" className=" marginForMessaging ml-md-1 forHover giveColor"><FiMessageSquare className="d-block iconFont1"/><small className="">Messaging</small></Nav.Link>
    <Nav.Link href="/" className=" marginForNotif ml-md-1 forHover giveColor"><GrNotification className="iconFont d-block marginNotif
    "/><small className="">Notification</small></Nav.Link>
    <Dropdown className="pr-3 ml-lg-0 ml-md-4 marginForMe">
  <Dropdown.Toggle variant="white" id="dropdown-basic">
    <span>
    <FaFlushed className="ml-1 d-block iconFont"/>
    <div className="d-inline"><small>Me</small></div>
    </span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">
    <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="" height={60}  className='ml-3'/>
      Action
      </Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Dropdown className="giveBorder pl-3 ml-0">
  <Dropdown.Toggle variant="transparent" id="dropdown-basic">
    <span>
    <FaGripHorizontal className="ml-2 d-block iconFont"/>
    <div className="d-inline"><small>Work</small></div>
    </span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Navbar.Collapse>
    <Nav className="mr-auto">
    
    </Nav>
      <Nav.Link className="premiumFree mb-1 ml-auto mr-auto "><small>Network Smarter,Try Premium Free</small></Nav.Link>
</Container>
</Navbar>
    )
}
export default Customnavbar;
