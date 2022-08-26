import React from 'react'
import "../style/Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

export default function SearchItem({name,surname,title,image,_id}) {
  return (
   <Link className='navbar-search-item-link'  to={`/user-profile/${_id}`} >
      <div  className='navbar-search-item d-flex align-items-center'>
        <FontAwesomeIcon icon={faSearch}/>
        <p style={{margin:0}}>{name} &nbsp;{surname}&nbsp;
        <strong>&#183;</strong>&nbsp;
        <span style={{margin:0, color:'var(--secondary)',fontWeight:'300',fontSize:'.8rem'}}>{title}</span>
        </p>
        <img src={image} alt='profile_picture' />
       
        </div>
   </Link>
  )
}
