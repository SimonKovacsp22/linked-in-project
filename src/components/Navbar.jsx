/** @format */

import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import "../style/Navbar.css"
import { useSelector } from "react-redux"
import { FaSearch, FaGripHorizontal, FaFlushed } from "react-icons/fa"
import { GrNotification } from "react-icons/gr"
import { MdWork, MdPeopleAlt } from "react-icons/md"
import { FiMessageSquare } from "react-icons/fi"
import { ImHome3 } from "react-icons/im"
import { useState } from "react";

const Customnavbar = (props ) => {
  const {setSearchResult,setSearchTerm,searchTerm,searchResult} = props
  const myProfile = useSelector((state) => state.myProfile.profileData)
  const allProfiles = useSelector((state)=> state.allProfiles.allProfilesData)
  // console.log(myProfile[0]._id)


const handleSearch = (profileName)=> {
  if(profileName.length >2){
 const filteredProfiles =allProfiles[0].filter((profile)=> 
  profile.name.toLowerCase().includes(profileName.toLowerCase()) ||  profile.surname.toLowerCase().includes(profileName.toLowerCase() || profile.username.toLowerCase().includes(profileName.toLowerCase())))
 setSearchResult(filteredProfiles)
}
 
}

 const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
     handleSearch(event.target.value)
   
  }
}
  return (
    <Navbar className="navbarbg px-0 mx-0" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-0 ml-2">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto position-relative">
            <FaSearch className="searchIcon giveColor" />
            <input type="text"
             value={searchTerm}
             onKeyDown={(e)=>{handleKeyPress(e)}}
             onChange={(e)=> {
              setSearchTerm(e.target.value)
             }}
             placeholder="Search"
              className="mr-sm-5 navbarSearch" 
              />
            {(searchResult.length > 0) && <div className="position-absolute search-dropdown">
              {searchResult.map((result)=>
              <p key={result._id} style={{borderBottom:'1px solid',padding:'3px 5px 3px 5px',margin:'0'}}>{result.name}<br/>{result.surname}</p>
              )}
            </div>}
  

          </Nav>
          <Nav.Link href="/" className="ml-lg-5 ml-md-3 mb-1 ml-sm-3 ml-3"><ImHome3 className="d-block HomeMargin iconFont2 " /><small className="giveColor">Home</small></Nav.Link>
          <Nav.Link href="/" className="giveMargin"><MdPeopleAlt className="d-block ml-4 iconFont2" /><small className="giveColor">MyNetwork</small></Nav.Link>
          <Nav.Link href="/" className="giveMargin ml-lg-0 ml-md-4 ml-sm-4 ml-4"><MdWork className="d-block iconFont2" /><small className="giveColor">jobs</small></Nav.Link>
          <Nav.Link href="/" className="mb-1"><FiMessageSquare className="d-block iconFont1" /><small className="giveColor">Messaging</small></Nav.Link>
          <Nav.Link href="/" className=""><GrNotification className="iconFont d-block ml-4" /><small className="giveColor">Notification</small></Nav.Link>
          <Dropdown className="pr-3 ml-lg-0 marginForMe">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span>
                <img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image" />
                {/* <FaFlushed className="ml-2 d-block iconFont" /> */}
                <div className="d-inline"><small>Me</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>




          <Dropdown className="giveBorder pl-3 ml-0">
            <Dropdown.Toggle variant="transparent" id="dropdown-basic">
              <span>
                <FaGripHorizontal className="ml-2 d-block iconFont" />
                <div className="d-inline"><small>Work</small></div>
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link className="premiumFree mb-1 mr-5"><small>Network Smarter,Try Premium Free</small></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Customnavbar
