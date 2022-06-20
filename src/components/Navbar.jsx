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
    // <Navbar className="navbarbg px-0 mx-0" expand="lg" fixed="top">
    //   <Container>
    //     <Navbar.Brand href="#home" className="mr-0 ml-2">
    //       <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="" height={50} />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //         <FaSearch className="searchIcon giveColor" />
    //         <input type="text" placeholder="Search" className="mr-sm-5 navbarSearch" />

    //       </Nav>
    //       <Nav.Link href="/" className="ml-lg-5 ml-md-3 mb-1 ml-sm-3 ml-3"><ImHome3 className="d-block HomeMargin iconFont2 " /><small className="giveColor">Home</small></Nav.Link>
    //       <Nav.Link href="/" className="giveMargin"><MdPeopleAlt className="d-block ml-4 iconFont2" /><small className="giveColor">MyNetwork</small></Nav.Link>
    //       <Nav.Link href="/" className="giveMargin ml-lg-0 ml-md-4 ml-sm-4 ml-4"><MdWork className="d-block iconFont2" /><small className="giveColor">jobs</small></Nav.Link>
    //       <Nav.Link href="/" className="mb-1"><FiMessageSquare className="d-block iconFont1" /><small className="giveColor">Messaging</small></Nav.Link>
    //       <Nav.Link href="/" className=""><GrNotification className="iconFont d-block ml-4" /><small className="giveColor">Notification</small></Nav.Link>
    //       <Dropdown className="pr-3 ml-lg-0 marginForMe">
    //         <Dropdown.Toggle variant="transparent" id="dropdown-basic">
    //           <span>
    //             <img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image" />
    //             {/* <FaFlushed className="ml-2 d-block iconFont" /> */}
    //             <div className="d-inline"><small>Me</small></div>
    //           </span>
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu>
    //           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>




    //       <Dropdown className="giveBorder pl-3 ml-0">
    //         <Dropdown.Toggle variant="transparent" id="dropdown-basic">
    //           <span>
    //             <FaGripHorizontal className="ml-2 d-block iconFont" />
    //             <div className="d-inline"><small>Work</small></div>
    //           </span>
    //         </Dropdown.Toggle>

    //         <Dropdown.Menu>
    //           <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //       <Nav.Link className="premiumFree mb-1 mr-5"><small>Network Smarter,Try Premium Free</small></Nav.Link>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar className="navbarbg" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="mr-0"><img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="" height={50} /></Navbar.Brand>
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
             <div className="border-bottom">
              
                <div className="d-flex justify-content-between text-secondary fw-light">
                  <p className="ml-3 mt-3">Recent</p>
                  <p className="mr-3 mt-3 hover-pointer"
                   onClick={()=> {
                   setSearchResult('')
                  }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg></p>
                  
                </div>
             <div className="d-flex mb-3 align-items-center">
                  <div className="d-flex flex-column mx-3 align-items-center"><svg style={{height:'20px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" className="bi bi-meta" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
  </svg>
  Meta</div>
  <div className="d-flex flex-column mx-3 align-items-center"><svg style={{height:'20px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
  Twitter</div>
  <div className="d-flex flex-column mx-3 align-items-center text-center">
    <img src="https://res.cloudinary.com/dmqsfltrf/image/upload/v1631287709/linkedin/lhjztgb9mlolvrm8ozn0.jpg" style={{width:'28px',height:'28px'}} alt="" />
  {allProfiles[0][36].name}</div>
             </div>
               
                  <div className="navbar-search-item-recent">  <FontAwesomeIcon icon={faClock} />Alesio Cavone</div>
                  <div  className="navbar-search-item-recent">  <FontAwesomeIcon icon={faClock} />epicode</div>
                  <div  className="navbar-search-item-recent">  <FontAwesomeIcon icon={faClock} />Epitalk</div>
               
             </div>
              <div className="navbar-search-results">
                <p className="navbar-dropdown-search-results-title">Search Results</p>
                {searchResult.map((result)=>
                <SearchItem className='SearchItem' key={result._id}
                  firstName={result.name}
                   surname={result.surname}>
                </SearchItem>
                )}
              </div>
            </div>}

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
              <div className="d-flex px-1 nav-profile-dropdown">
                <div className="p-1"><img src={myProfile.image} alt="" className="ml-2 d-block iconFont nav-profile-image-dropdown" /></div>
                <div className="ml-3 nav-profile-dropdown-details">
                  <p>{myProfile.name} {myProfile.surname}</p>
                  <p>{myProfile.title}</p>
                </div>
              </div>
              <Dropdown.Item href="#/action-1">{myProfile.name} {myProfile.surname}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{myProfile.title}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{myProfile.area}</Dropdown.Item>
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
