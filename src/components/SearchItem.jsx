import React from 'react'
import "../style/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default function SearchItem({firstName,surname}) {
  return (
    <div  className='navbar-search-item d-flex align-items-center'><FontAwesomeIcon icon={faSearch}/><p style={{margin:0}}>{firstName} &nbsp;{surname}</p></div>
  )
}
