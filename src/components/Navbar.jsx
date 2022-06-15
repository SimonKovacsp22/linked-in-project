/** @format */

import { Nav, Navbar, Dropdown } from "react-bootstrap"
import "../style/Navbar.css"
import { useSelector } from "react-redux"
import { FaSearch, FaGripHorizontal, FaFlushed } from "react-icons/fa"
import { GrNotification } from "react-icons/gr"
import { MdWork, MdPeopleAlt } from "react-icons/md"
import { FiMessageSquare } from "react-icons/fi"
import { ImHome3 } from "react-icons/im"

const Customnavbar = () => {
  const myProfile = useSelector((state) => state.myProfile.profileData)
  // console.log(myProfile[0]._id)
  return (
    <Navbar className='navbarbg px-0 mb-3' expand='lg'>
      <Navbar.Brand href='#home'>
        <img
          className='logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png'
          alt=''
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <FaSearch className='searchIcon giveColor ' />
          <input
            type='text'
            placeholder='Search'
            className='mr-sm-5 navbarSearch'
          />
        </Nav>
        <div className='d-flex align-items-center'>
          <Nav.Link href='/' className='ml-lg-5 ml-md-3 mb-1'>
            <ImHome3 className='d-block HomeMargin iconFont2 ' />
            <small className='giveColor'>Home</small>
          </Nav.Link>
          <Nav.Link href='/' className='giveMargin text-center'>
            <MdPeopleAlt className='d-block ml-4 iconFont2' />
            <small className='giveColor'>MyNetwork</small>
          </Nav.Link>
          <Nav.Link href='/' className='giveMargin ml-lg-0 ml-md-4'>
            <MdWork className='d-block iconFont2' />
            <small className='giveColor'>jobs</small>
          </Nav.Link>
          <Nav.Link href='/' className='mb-1'>
            <FiMessageSquare className='d-block  iconFont1' />
            <small className='giveColor'>Messaging</small>
          </Nav.Link>
          <Nav.Link href='/' className=''>
            <GrNotification className='iconFont d-block ml-4' />
            <small className='giveColor'>Notification</small>
          </Nav.Link>
          <Nav.Link href='/' className='text-center'>
            <img
              className='navbar-profile py-0'
              src={myProfile[0].image}
              alt=''
            />
            <Dropdown className='ml-lg-0 ml-md-3 py-0'>
              <Dropdown.Toggle
                variant='transparent'
                id='dropdown-basic'
                className='py-0'>
                <small className='giveColor'>Me</small>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </div>

        <Dropdown className='giveBorder pl-3'>
          <Dropdown.Toggle variant='transparent' id='dropdown-basic'>
            <span>
              <FaGripHorizontal className='ml-2 d-block iconFont' />
              <div className='d-inline'>
                <small>Work</small>
              </div>
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link className='premiumFree mb-1 mr-5'>
          <small>Network Smarter,Try Premium Free</small>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Customnavbar
