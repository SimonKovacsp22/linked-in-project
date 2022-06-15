import React from 'react'
import { Link } from 'react-router-dom'
import "../style/About.css"

const About = () => {
    return (
        <div className='about d-flex p-2'>
            <div>
                <p><Link to="/">Group</Link></p>
                <p><Link to="/">Events</Link></p>
                <p><Link to="/">Followed Hashtags</Link></p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <i className="bi bi-plus-lg"></i>
            </div>

        </div>
    )
}

export default About