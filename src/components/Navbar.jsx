/** @format */

import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import "../style/Navbar.css"
import { useSelector } from "react-redux"
import { FaSearch, FaGripHorizontal, FaFlushed } from "react-icons/fa"
import { GrNotification } from "react-icons/gr"
import { MdWork, MdPeopleAlt } from "react-icons/md"
import { FiMessageSquare } from "react-icons/fi"
import { ImHome3 } from "react-icons/im"
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";

const Customnavbar = () => {
  const myProfile = useSelector((state) => state.myProfile.profileData)

  const toggleMenu = () => {
    console.log("object");
  }

  return (
    <Navbar className="navbarbg" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-0"><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" height={50} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <FaSearch className="searchIcon giveColor" />
            <input type="text" placeholder="Search" className="mr-sm-5 navbarSearch" />

          </Nav>
          <Nav.Link href="/" className="ml-lg-5 ml-md-3 marginForHome ml-sm-3 ml-3"><ImHome3 className="d-block HomeMargin iconFont3 " /><small className="giveColor">Home</small></Nav.Link>
          <Nav.Link href="/" className="giveMargin2"><MdPeopleAlt className="d-block ml-4 iconFont2" /><small className="giveColor">MyNetwork</small></Nav.Link>
          <Nav.Link href="/" className="giveMargin ml-lg-0 ml-md-4 ml-sm-4 ml-4"><MdWork className="d-block iconFont5" /><small className="giveColor">jobs</small></Nav.Link>
          <Nav.Link href="/" className="marginForMessaging"><FiMessageSquare className="d-block iconFont1" /><small className="giveColor">Messaging</small></Nav.Link>
          <Nav.Link href="/" className="marginForNotif"><GrNotification className="iconFont d-block marginNotif" /><small className="giveColor">Notification</small></Nav.Link>
          <Dropdown className="pr-3 ml-lg-0 marginForMe">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <span>
                <img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image" />
                {/* <FaFlushed className="ml-1 d-block iconFont" /> */}
                <div className="d-inline"><small>Me</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="px-1 nav-profile-dropdown">
                <div className="nav-dropdown-section01 d-flex">
                  <div className="p-1"><img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image-dropdown" /></div>
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">{myProfile.name} {myProfile.surname}</p>
                    <p>{myProfile.title}</p>
                  </div>

                </div>
                <button type="button" className="btn btn-outline-info btn-block rounded-pill px-5 py-1">View profile</button>
                <div className="nav-dropdown-section02">
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">Account</p>
                    <p><Link to="/">Settings & Privacy</Link></p>
                    <p><Link to="/">Help</Link></p>
                    <p><Link to="/">Language</Link></p>
                  </div>
                </div>
                <div className="nav-dropdown-section03 border-top">
                  <div className="ml-3 nav-profile-dropdown-details">
                    <p className="font-weight-bold">Manage</p>
                    <p><Link to="/">Posts & Activity</Link></p>
                    <p><Link to="/">Job Posting Account</Link></p>
                    <div className="border-top">
                      <p><Link to="/">Sign Out</Link></p>
                    </div>

                  </div>
                </div>
              </div>
              {/* <Dropdown.Item href="#/action-1">{myProfile.name} {myProfile.surname}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{myProfile.title}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{myProfile.area}</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>




          <Dropdown className="giveBorder pl-3 ml-0">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span>
                <FaGripHorizontal className="ml-2 d-block iconFont" />
                <div className="d-inline"><small>Work</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="toggle-container">
              <ToggleMenu />
              {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link className="premiumFree mb-1 mr-5"><small>Network Smarter,Try Premium Free</small></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Customnavbar
